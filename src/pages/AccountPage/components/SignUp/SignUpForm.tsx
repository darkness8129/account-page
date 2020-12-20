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

  const handleCheck = (value: boolean): void => {
    setAgreement(value);
  };

  const checkName = (value: string): void => {
    const error = validateName(value);
    setName({ value, error });
  };

  const checkEmail = (value: string): void => {
    const error = validateEmail(value);
    setEmail({ value, error });
  };

  const checkPassword = (value: string): void => {
    const error = validatePassword(value);
    setPassword({ value, error });
  };

  // if name or email or password is empty
  // or agreement is not checked, or error in name/email/password
  const isSubmitDisable: boolean =
    !name.value ||
    !email.value ||
    !password.value ||
    !agreement ||
    !!name.error ||
    !!email.error ||
    !!password.error;

  return (
    <form>
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
        onChange={handleCheck}
        checked={agreement}
      />
      {name.error && <FormError message={name.error} />}
      {email.error && <FormError message={email.error} />}
      {password.error && <FormError message={password.error} />}
      <FormButton text="Sign Up" isDisabled={isSubmitDisable} />
      <FormQuestion question="Already registered?" linkText="Sign In" />
    </form>
  );
};

export default SignUpForm;
