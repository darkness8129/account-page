const maxLength = (len: number, value: string): boolean => value.length <= len;
const minLength = (len: number, value: string): boolean => value.length >= len;

export const validateName = (value: string): string | null => {
  const NAME = /^[a-zA-Z0-9._]+$/;

  // check for correct length
  if (!minLength(3, value) || !maxLength(16, value)) {
    return 'Username has incorrect length!';
  }

  // check name correctness
  if (!NAME.test(value)) {
    return 'Username is not valid!';
  }

  return null;
};

export const validateEmail = (value: string): string | null => {
  const EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  // check for correct length
  if (!EMAIL.test(value)) {
    return 'Email is not valid!';
  }

  return null;
};

export const validatePassword = (value: string): string | null => {
  // check for correct length
  if (!minLength(6, value) || !maxLength(16, value)) {
    return 'Password has incorrect length!';
  }

  return null;
};
