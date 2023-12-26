// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function sameCase(a, b){
    function isCharacterALetter(char) {
      return(/[a-zA-Z]/).test(char);
    }
    if (a == false || b == false) {
      return -1;
    }
    else if (!isCharacterALetter(a) || !isCharacterALetter(b)) {
        return -1;
    }
    else if ( (a === a.toLowerCase() && b === b.toLowerCase())
    || (a === a.toUpperCase() && b === b.toUpperCase()) ){
      return 1;
    }
    else if (typeof a === typeof b) {
      return 0;
    }
    else if (typeof a !== typeof b) {
      return -1;
    }
  }