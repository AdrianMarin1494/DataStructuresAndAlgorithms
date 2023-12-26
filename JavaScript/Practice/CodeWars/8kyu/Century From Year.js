// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
    let century = 0;
    for (let i= 1; i <= year; i += 100) {
      century++
    }
    return century;
  }