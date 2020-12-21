import React, { useState } from 'react';
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
import firebase from 'firebase-config';
import { Redirect } from 'react-router-dom';

interface IUserInfo {
  value: string;
  error: string | null;
}

const SignUpForm = () => {
  const [name, setName] = useState<IUserInfo>({ value: '', error: null });
  const [email, setEmail] = useState<IUserInfo>({
    value: '',
    error: null,
  });
  const [password, setPassword] = useState<IUserInfo>({
    value: '',
    error: null,
  });
  const [agreement, setAgreement] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // to know whether to continue authorization with firebase
    let apiValidationError: null | string = null;

    setIsLoading(true);

    try {
      const apiResponse = await fetch(
        `https://api.ryddm.com/v1/auth/username-available/${name.value}`
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
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    }
  };

  const handleCheckbox = (value: boolean): void => {
    setAgreement(value);
  };

  // validate name on client side
  const checkName = (value: string): void => {
    const error = validateName(value);
    setName({ value, error });
  };

  // validate email on client side
  const checkEmail = (value: string): void => {
    const error = validateEmail(value);
    setEmail({ value, error });
  };

  // validate password on client side
  const checkPassword = (value: string): void => {
    const error = validatePassword(value);
    setPassword({ value, error });
  };

  /* if name or email or password is empty
   * or agreement is not checked,
   * or error in name/email/password
   * or when loading
   */
  const isSubmitDisabled: boolean =
    !name.value ||
    !email.value ||
    !password.value ||
    !agreement ||
    !!name.error ||
    !!email.error ||
    !!password.error ||
    isLoading;

  // redirect when logged in
  if (firebase.auth().currentUser) return <Redirect to="/signout" />;

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        labelText="Username"
        promptText={`(letters, numbers, "." and "_", 3-16 symbols)`}
        placeholder="champagnepapi"
        type="text"
        id="username"
        name="username"
        value={name.value}
        isRequired
        validation={checkName}
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
        validation={checkEmail}
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
        validation={checkPassword}
      />
      <FormAgreement
        id="agreement"
        name="agreement"
        onChange={handleCheckbox}
        checked={agreement}
      />
      {name.error && <FormError message={name.error} />}
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
