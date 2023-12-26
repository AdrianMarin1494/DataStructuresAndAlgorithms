// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i of arr1) {
      sum += i;
    }
    for (let j of arr2) {
      sum += j
    }
    return sum;
  }