// It's a combination of two things - merging and sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
// The function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it

// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at:
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results 
// and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, 
// push the value in the second array into our results and move on the next value in the second array
// once we exhaust one array, push in all remaining values from the other array

// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         results.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         results.push(arr2[j]);
//         j++;
//     }
//     return results;
// }

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// [1, 10, 50] [2, 14, 99, 100]
// [(1), 10, 50] [(2), 14, 99, 100]
// compare 1 and 2, put 1 in the res because is smaller
// [1]
// [1, (10), 50] [(2), 14, 99, 100]
// compare 10 and 2 and put 2 in the results array
// [1, 2]
// [1, (10), 50] [2, (14), 99, 100]
// compare 10 and 14 and put 10 in the results array
// [1, 2, 10]
// [1, 10, (50)] [2, (14), 99, 100]
// compare 50 and 14 and put 14 in the results array
// [1, 2, 10, 14]
// [1, 10, (50)] [2, 14, (99), 100]
// compare 50 and 99 and put 50 in the results array
// [1, 2, 10, 14, 50]
// we hit the end of the first array
// now we just add the value from second array
// [1, 2, 10, 14, 50, 99, 100]

// Merge sort pseudocode
// Break up the array into halves untill you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the arrays has been merged back toghether, return the merged (and sorted!) array

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// we check if the  arr length is 1, no
// we find the middle point
// then we call merge sort on the left side

console.log(mergeSort([10, 24, 76, 73]));

// BigO
// Time complexity: O (n log n)
// Space complexity: O(n)