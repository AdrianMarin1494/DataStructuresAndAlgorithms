// https://www.codewars.com/kata/62a611067274990047f431a8

function alternate(n, firstValue, secondValue){
    const valuesList = [];
    for (let i = 0; i < Math.round(n/2); i++) {
      valuesList.push(firstValue)
      if (i < Math.floor(n/2)) {
        valuesList.push(secondValue);
      }
    }
    return valuesList;
  }
  
  alternate(5, true, false);