// https://www.codewars.com/kata/596fba44963025c878000039

function contamination(text, char){
    let textAfter = "";
    for (let i in text) {
      textAfter += char;
    }
    return textAfter;
  }