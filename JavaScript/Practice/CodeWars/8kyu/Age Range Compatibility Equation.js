// https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age){
    let min = Math.floor(age / 2 + 7);
    let max = (age - 7) * 2
    if (age <= 14) {
      min = Math.floor(age - 0.10 * age);
      max = Math.floor(age + 0.10 * age);
    }
    return `${min}-${max}`
  }