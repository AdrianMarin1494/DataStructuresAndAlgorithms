// https://www.codewars.com/kata/596c6eb85b0f515834000049

const replaceDots = function(str) {
    //   return str.replaceAll('.', '-');
      for (let i of str){
        if (i === '.') {
          str = str.replace('.', '-');
          }
        }
      return str;
    }