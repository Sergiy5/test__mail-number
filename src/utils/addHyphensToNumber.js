import { removeHyphens } from "./removeHyphens";

export const addHyphensToNumber = number => {
  if(!number) return
  const clearStringNumbers = removeHyphens(number);

  const numbersArray = clearStringNumbers.split('');

  let hyphenatedString = '';

  for (let i = 0; i < numbersArray.length; i += 2) {
    const firstNumber = numbersArray[i];
    const secondNumber = numbersArray[i + 1];
    const thirdNumber = numbersArray[i + 2];

    if (secondNumber === undefined && thirdNumber === undefined)
      hyphenatedString += `${firstNumber}`;

    if (secondNumber !== undefined && thirdNumber === undefined)
      hyphenatedString += `${firstNumber}${secondNumber}`;

    if (thirdNumber !== undefined)
      hyphenatedString += `${firstNumber}${secondNumber}-`;
  }
  return hyphenatedString;
};
