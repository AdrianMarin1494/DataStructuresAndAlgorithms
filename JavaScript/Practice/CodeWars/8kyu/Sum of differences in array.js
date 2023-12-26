// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
      return 0;
    }
    arr.sort((a,b)=>b-a);
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      sum += parseInt(arr[i]) - parseInt(arr[i+1]);
    }
    return sum;
  }