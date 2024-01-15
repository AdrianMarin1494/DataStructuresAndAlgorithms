// "Every number after the first two is the sum of the two preceding ones"

// Recursive solution
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Big O:
// Time complexity: O(2^n)

// WHAT IF WE COULD
// "REMEMBER" OLD VALUES?

// ENTER
// DYNAMIC PROGRAMMING
// "Using past knowledge to make solving a future problem easier"

// MEMOIZATION
// Storing the results of expensive function calls and returning the cached result when the same inputs occur again

// Memo-ized solution
function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// Big O:
// Time complexity: O(n)