import React, { useContext, useEffect, useState } from 'react';
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
import userNameApi from 'api/userName';

interface IUserInfo {
  value: string;
  error: null | string;
}

interface IInputsData {
  name: IUserInfo;
  email: IUserInfo;
  password: IUserInfo;
  agreement: boolean;
}

const SignUpForm = () => {
  const [inputsData, setInputsData] = useState<IInputsData>({
    name: {
      value: '',
      error: null,
    },
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
    agreement: false,
  });
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldAuth, setShouldAuth] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  /* Check validity of name by api request
   * And user registration wit the help of firebase
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const nameError = await userNameApi.validateUserName(inputsData.name.value);

    /* if err - show err, stop loading, stop auth
     * no err - continue auth
     */
    if (nameError) {
      setServerError(nameError);
      setShouldAuth(false);
      setIsLoading(false);
    } else {
      setShouldAuth(true);
    }
  };

  // to detect changes of shouldAuth
  useEffect(() => {
    const firebaseAuth = async () => {
      const authErr = await auth.signUp(
        inputsData.email.value,
        inputsData.password.value
      );

      if (authErr) setServerError(authErr);
      setIsLoading(false);
    };

    // auth only if shouldAuth true
    if (shouldAuth) firebaseAuth();
    setShouldAuth(false);
  }, [shouldAuth]);

  /*  Func for handling change event in inputs
   *  Provide validation for inputs and set values to state
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = e.currentTarget;
    let error: string | null = null;

    switch (name) {
      case 'username':
        error = validateName(value);
        setInputsData((prev) => ({ ...prev, name: { value, error } }));
        break;
      case 'email':
        error = validateEmail(value);
        setInputsData((prev) => ({ ...prev, email: { value, error } }));
        break;
      case 'password':
        error = validatePassword(value);
        setInputsData((prev) => ({ ...prev, password: { value, error } }));
        break;
      case 'agreement':
        setInputsData((prev) => ({
          ...prev,
          agreement: checked,
        }));
        break;
    }
  };

  /* if name or email or password is empty
   * or agreement is not checked,
   * or error in name/email/password
   * or when loading
   */
  const isSubmitDisabled: boolean =
    !inputsData.name.value ||
    !inputsData.email.value ||
    !inputsData.password.value ||
    !inputsData.agreement ||
    !!inputsData.name.error ||
    !!inputsData.email.error ||
    !!inputsData.password.error ||
    isLoading;

  // redirect when user registered
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
        value={inputsData.name.value}
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
        value={inputsData.email.value}
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
        value={inputsData.password.value}
        isRequired
        onChange={handleOnChange}
      />
      <FormAgreement
        id="agreement"
        name="agreement"
        onChange={handleOnChange}
        checked={inputsData.agreement}
      />
      {[
        inputsData.name.error,
        inputsData.email.error,
        inputsData.password.error,
        serverError,
      ].map((err) => {
        return err ? <FormError message={err} key={err} /> : null;
      })}
      <FormButton
        text={isLoading ? 'Loading' : 'Sign Up'}
        isDisabled={isSubmitDisabled}
      />
      <FormQuestion question="Already registered?" linkText="Sign In" />
    </form>
  );
};

export default SignUpForm;
