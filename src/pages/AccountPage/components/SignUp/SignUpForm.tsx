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

const SignUpForm = () => {
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const checkName = (value: string): void => {
    const error = validateName(value);
    setNameError(error);
  };

  const checkEmail = (value: string): void => {
    const error = validateEmail(value);
    setEmailError(error);
  };

  const checkPassword = (value: string): void => {
    const error = validatePassword(value);
    setPasswordError(error);
  };

  // flag to disable submit btn, if error int some input
  const isSubmitDisable: boolean =
    !!nameError || !!emailError || !!passwordError;

  return (
    <form>
      <FormInput
        labelText="Username"
        promptText={`(letters, numbers, "." and "_", 3-16 symbols)`}
        placeholder="champagnepapi"
        type="text"
        id="username"
        name="username"
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
        isRequired
        validation={checkPassword}
      />
      <FormAgreement id="agreement" name="agreement" />
      {nameError && <FormError message={nameError} />}
      {emailError && <FormError message={emailError} />}
      {passwordError && <FormError message={passwordError} />}
      <FormButton text="Sign Up" isDisabled={isSubmitDisable} />
      <FormQuestion question="Already registered?" linkText="Sign In" />
    </form>
  );
};

export default SignUpForm;
