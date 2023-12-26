// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
    let arr = [integer];
    let i = integer;
    while (integer <= limit) {
      integer += i;
      if (integer <= limit) {
        arr.push(integer)
        console.log('loop', integer)
      }
    }
    console.log(arr)
    return arr;
  }