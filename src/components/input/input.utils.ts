import { RegexpEmail, RegexpPassword } from 'constants/validation';

const validateEmail = (email: string) => RegexpEmail.test(email.toLowerCase());

const validatePassword = (password: string) => RegexpPassword.test(password);

export const validateInput = (value: string, type?: TInputType) => {
  switch (type) {
    case 'email':
      return !validateEmail(value);

    case 'password':
      return !validatePassword(value);

    default:
      return false;
  }
};
