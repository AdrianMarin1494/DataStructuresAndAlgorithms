// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    const numbersArray = [];
    for (let i = 1; i <= n; i++) {
      numbersArray.unshift(i);
    }
    return numbersArray;
  };