import { isValidEmail } from "./isValidEmail";
import { isValidNumber } from "./isValidNumber";
import { removeHyphens } from "./removeHyphens";

export const validFormData = dataForm => {
  const errors = {};

  if (!isValidEmail(dataForm.email)) {
    errors.email = 'Valid format: username@example.com';
  }
  if (!!dataForm.number) {
    if (!isValidNumber(removeHyphens(dataForm.number))) {
      errors.number = 'Enter number in format 77-77-77 use only digits.';
    }
    }
    return errors
};
