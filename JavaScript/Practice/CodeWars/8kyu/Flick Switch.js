// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

function flickSwitch(arr){
    let currentBoolean = true;
    let booleansList = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "flick") {
        currentBoolean = !currentBoolean;
      }
      booleansList.push(currentBoolean);
    }
    return booleansList;
  }

  console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));