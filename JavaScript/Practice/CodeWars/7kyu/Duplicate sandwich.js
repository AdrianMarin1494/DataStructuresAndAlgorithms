// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19

function duplicateSandwich(a) {
    for (let i in a) {
      for (let j in a) {
        if (i !== j && a[i] === a[j]) {
          i++
          let sliced = a.slice(i, j)
          return sliced;
        }
      }
    }
  }