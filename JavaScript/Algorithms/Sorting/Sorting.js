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