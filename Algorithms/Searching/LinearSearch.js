// Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want
// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    
    return -1;
}

console.log(linearSearch([1, 3, 6, 8], 6));

// Time complexity: O(n);