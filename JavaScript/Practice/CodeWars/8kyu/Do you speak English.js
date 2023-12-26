// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058

function spEng(sentence){
    const wordCheck = /english/gi;
    return wordCheck.test(sentence);
  }