// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
    //your code here
    let count = ''
    for (i = 1; i <= num; i++) {
      count += `${i} sheep...`
    }
    return count;
  }