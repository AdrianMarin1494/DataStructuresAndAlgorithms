// "Every number after the first two is the sum of the two preceding ones"

// Recursive solution
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
  }