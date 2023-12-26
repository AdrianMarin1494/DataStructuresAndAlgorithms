// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return `Position of alphabet: ${letters.indexOf(letter) + 1}`;
  }