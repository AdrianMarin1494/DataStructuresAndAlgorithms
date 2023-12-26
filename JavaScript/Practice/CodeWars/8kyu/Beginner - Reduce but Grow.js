// https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x){
    let total = 1;        
    x.forEach((item) => total *= item);
    return total;
  
  //   let total = 1;        
  //   for (let i of x) {
  //     total *= i;
  //   };
  //   return total;
  }