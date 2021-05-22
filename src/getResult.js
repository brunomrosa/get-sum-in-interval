/* eslint-disable no-loop-func */
const maxDigit = (digit, goal) => {
  let i = 0;
  let max = "";
  for (let b = 0; b < Number(digit); b++) {
    max = max + "9";
  }
  
  let matchingNumbers = [];
  let initialNumber = "0";
  while (i < max) {
    const sumNumber = (n) => {
      let total = 0;
      for (let a = n; a != -1; a--) {
        total = total + Number(initialNumber[a]);
      }
      if (total === goal) {
        matchingNumbers.push(initialNumber);
      }
    };
    sumNumber(initialNumber.length - 1);
    const parseInitialNumber = Number(initialNumber);
    const addToInitialNumber = parseInitialNumber + 1;
    initialNumber = addToInitialNumber.toString();

    i++;
  }

  return matchingNumbers;
};

export default maxDigit;
