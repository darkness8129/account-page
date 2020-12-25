import React, { useContext, useState } from 'react';
import FormInput from 'common/components/form/FormInput';
import FormButton from 'common/components/form/FormButton';
import FormAgreement from 'common/components/form/FormAgreement';
import FormQuestion from 'common/components/form/FormQuestion';
import FormError from 'common/components/form/FormError';
import {
  validateEmail,
  validateName,
  validatePassword,
} from 'common/utils/validators/validators';
import { Redirect } from 'react-router-dom';
import auth from 'firebase/firebaseAuth';
import { AuthContext } from 'common/provider/AuthProvider';

interface IUserInfo {
  value: string;
  error: string | null;
}

const SignUpForm = () => {
  const [userName, setUserName] = useState<IUserInfo>({
    value: '',
    error: null,
  });
  const [email, setEmail] = useState<IUserInfo>({
    value: '',
    error: null,
  });
  const [password, setPassword] = useState<IUserInfo>({
    value: '',
    error: null,
  });
  const [agreement, setAgreement] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // to know whether to continue authorization with firebase
    let apiValidationError: null | string = null;

    setIsLoading(true);

    try {
      const apiResponse = await fetch(
        `https://api.ryddm.com/v1/auth/username-available/${userName.value}`
      );

      // response successful - continue, else - throw err
      if (!apiResponse.ok) {
        const error = new Error(
          `Error ${apiResponse.status}: ${apiResponse.statusText}`
        );
        console.error(error);
        throw error;
      }

      const data = await apiResponse.json();

      // if name not valid ot unavailable
      if (!data.usernameAvailable) {
        const error = new Error(`Error! Username is not available!`);
        console.log(error.message);
        throw error;
      } else if (!data.usernameValid) {
        const error = new Error(`Error! Username is not valid!`);
        console.log(error.message);
        throw error;
      }
    } catch (error) {
      apiValidationError = error.message;
      setIsLoading(false);
    }

    // if do not have err in validating from api - continue auth with firebase
    if (!apiValidationError) {
      const currentUser = await auth.signUp(email.value, password.value);
      setIsLoading(false);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    let error;
    switch (name) {
      case 'username':
        error = validateName(value);
        setUserName({ value, error });
        break;
      case 'email':
        error = validateEmail(value);
        setEmail({ value, error });
        break;
      case 'password':
        error = validatePassword(value);
        setPassword({ value, error });
        break;
      case 'agreement':
        setAgreement(value);
        break;
    }
  };

  /* if name or email or password is empty
   * or agreement is not checked,
   * or error in name/email/password
   * or when loading
   */
  const isSubmitDisabled: boolean =
    !userName.value ||
    !email.value ||
    !password.value ||
    !agreement ||
    !!userName.error ||
    !!email.error ||
    !!password.error ||
    isLoading;

  // redirect when logged in
  if (user) return <Redirect to="/home" />;

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        labelText="Username"
        promptText={`(letters, numbers, "." and "_", 3-16 symbols)`}
        placeholder="champagnepapi"
        type="text"
        id="username"
        name="username"
        value={userName.value}
        isRequired
        onChange={handleOnChange}
      />
      <FormInput
        labelText="Email"
        promptText=""
        placeholder="drake@email.com"
        type="email"
        id="email"
        name="email"
        value={email.value}
        isRequired
        onChange={handleOnChange}
      />
      <FormInput
        labelText="Password"
        promptText=""
        placeholder="••••••••••••••••••••••••••"
        type="password"
        id="password"
        name="password"
        value={password.value}
        isRequired
        onChange={handleOnChange}
      />
      <FormAgreement
        id="agreement"
        name="agreement"
        onChange={handleOnChange}
        checked={agreement}
      />
      {userName.error && <FormError message={userName.error} />}
      {email.error && <FormError message={email.error} />}
      {password.error && <FormError message={password.error} />}
      <FormButton
        text={isLoading ? 'Loading' : 'Sign Up'}
        isDisabled={isSubmitDisabled}
      />
      <FormQuestion question="Already registered?" linkText="Sign In" />
    </form>
  );
};

export default SignUpForm;
