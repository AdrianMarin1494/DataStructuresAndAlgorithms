// Rather than eliminating one element at a time,
// you can eliminate "half" of the remaining elements at a time
// Binary search only works on sorted arrays!
// Is based on divide and conquer
// We split up the array in 2 pices
// We pick the pivot point in the middle
// Check the left side and right side to see on which half is the element

// Example
// [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
// Search for 15
// Left -      the middle is 11           - Right
// Check if 15 is less or greater than 11
// it is greater, so the left side is eliminated
// [12, 15, 16, 17, 18, 19]
// Left- the middle is 17 - Right
// Check if 15 is less or greater than 17
// it is less than 17, so the right side is eliminated
// [12, 15, 16]
// Left - the middle is 15 - Right
// check if 15 is equal to 15
// the binary search is done

// Pseudocode
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array
// and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start < end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    } 
    if (arr[middle] === elem) {
        return middle;
    } 
    return -1;
}

console.log(binarySearch([1, 3, 5, 8, 9], 8));

// Time complexity: O(log n)