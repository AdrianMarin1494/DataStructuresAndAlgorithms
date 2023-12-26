// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

function replace(s){
    let replaced = '';
    for (let i of s) {
      if ('aeiouAEIOU'.includes(i)) {
        i = '!';
      }
      replaced += i;
    }
    return replaced;
  }