https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    const completeArray = [...arr1, ...arr2];
    completeArray.sort((a,b) => a-b)
    for (let i = 1; i <= completeArray.length; i++) {
      if (completeArray[i-1] === completeArray[i]) {
        completeArray.splice(i-1, 1);
      }
    }
  
  
    console.log(completeArray)
    return completeArray
  }