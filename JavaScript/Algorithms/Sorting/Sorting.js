// The built-in sort method accepts an optional comparator function
// You can use this comparator function to tell JavaScript how you want it to sort
// The comparator looks at pairs of elements(a and b)
// determines their sort order based on the return value
// if it returns a negative number, a should come before b
// if it returns a positive number, a should come after b,
// if it returns 0, a and b are the same as far as the sort is concerned

// Sort built-in method for sorting string by length
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
console.log(["orange", "watermelon", "pear", "peach"].sort(compareByLen));

// Sort built-in method for sorting numbers
function numberCompare(num1, num2) {
    return num1 - num2;
}
console.log([1, 3, 4, 6, 8].sort(numberCompare));

// Sort built-in method for reverse number sorting
function numberCompareReverse(num1, num2) {
    return num2 - num1;
}
console.log([1, 3, 4, 6, 8].sort(numberCompareReverse));


// Swap
// Manny sorting algorithms involve some type of swapping functionality
// e.g. swapping to numbers to put them in order

// ES5
function swapEs5(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
function swapEs2015(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
} 