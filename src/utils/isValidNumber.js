export const isValidNumber = numberStr => {
     const pattern = /^\d{6}$/;
     return pattern.test(numberStr);
}