// Recursion is a process (a function in our case) that calls itself
// Invoke the same function with a different input until you reach your base case
// Base case, the condition when the recursion ends 

// Where the things go wrong
// No base case, no end of function
// Forgetting to return or returning the wrong thing
// Stack overflow

// Helper method recursion
// we have the main outer function and inside we have the recursive faction which call itself

// Pure recursion tips
// For arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them
// Remember that string are  immutable so you will need to use method like slice, substr or substring to make copies of strings

function countDown(num) {
    if(num <= 0) {
        console.log('All done');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(3)

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print All done! and return to stop the function


function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(3)

// return 3 + sumRange(2)
//            sumRange(2) => return 2 + sumRange(1)
//                                      sumRange(1) => return 1
// 3 (from sumRange(3)) + 2 (from sumRange(2)) + 1 (from sumRange(1))
// return 6


function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}

factorial(3);

// num: 3 * factorial(2)
// num: 2 * factorial(1)
// num = 1 return 1
// 1 * 2 * 3 return 6

// Non recursion example
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i
//     }
//     return total;
// }


function factorial(num) {
    // if (num === 1) return 1;
    return num * factorial(num-1);
}

factorial(3);

// No base case, no end of function
// Maximum call stack size exceeded
// Stack overflow


function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num);
}

factorial(3);

// Forgetting to return or returning the wrong thing
// Calling the function with the same argument every time
// Maximum call stack size exceeded
// Stack overflow


function factorial(num) {
    if (num === 1) console.log(1);
    return num * factorial(num);
}

factorial(3);

// Forgetting to return or returning the wrong thing
// No return
// Maximum call stack size exceeded
// Stack overflow


function outer(input) {
    let outerScopedVariable = []
    
    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}

// Helper method recursion
// we have the main outer function and 
// inside we have the recursive faction which call itself


function collectOddValues(arr) {

    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !==0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    
    return result;
}


// Helper method recursion
// we have the main outer function and 
// inside we have the recursive faction which call itself
// a solution to not reset the result every time


function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])

// Pure recursion
// [1].concat(collectOddValues[2, 3, 4, 5])
// [].concat(collectOddValues[3, 4, 5])
// [3].concat(collectOddValues[4, 5])
// [].concat(collectOddValues[5])
// [5].concat(collectOddValues[])
// return newArr = []
// [1].concat([]).concat([3]).concat([]).concat([5]).concat([])
// [1, 3, 5]