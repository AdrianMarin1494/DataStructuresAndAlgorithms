// https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
    //   create new array
    //   create a for in loop 
    //   create if and check using i
    //   push in the new array if is true
      
      const newArr = [];
      for (let i in array) {
        if (array[i] % i === 0) {
          newArr.push(array[i])
        }
      }
      return newArr;
    }