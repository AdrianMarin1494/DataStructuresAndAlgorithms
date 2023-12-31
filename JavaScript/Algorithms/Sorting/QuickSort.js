// Like merge sort, exploits the fact that array of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// How it works
// [5, 2, 1, 8, 4, 7, 6, 3]
// pick an element, 5, move all the numbers which are less than 5 and move them to the left
// the numbers higher than 5 will be moved to the right
// [3, 2, 1, 4, 5, 7, 6, 8]
// so 5 is in the correct spot

// now we repeat the process on the left and right side
// for the left side
// chose number 3 and move the numbers which are less to the left
// the numbers higher than 3 will be moved to the right
// for the right side
// now we chose 1 and the left side is sorted
// [1, 2, 3, 4, 5, 7, 6, 8]
// for the right side
// chose number 7 and move the numbers which are less to the left
// the numbers higher than 7 will be moved to the right
// [1, 2, 3, 4, 5, 6, 7, 8]

// Pivot helper
// In order to implement sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the arrays so that all values less than the pivot are moved to the left of the pivot 
// and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesen't matter
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot 

// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

// Pivot helper introduction
// It will help to accept three arguments: an array, a start index and an end index (these can default to 0 and the array length minus 1)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// if the pivot is greater than the current element, increment the pivot index variable and then swpa the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

// function pivot(arr, start=0, end=arr.length+1) {
//     function swap(array, i, j) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }

//     let pivot = arr[start];
//     let swapIdx = start;
    
//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i);
//         }
//     }
//     swap(arr, start, swapIdx);
//     return swapIdx;
// }

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// pivot([4, 8, 2, 1, 5, 7, 6, 3])
// ([4, 8, 2, 1, 5, 7, 6, 3])
// ([4, 2, 8, 1, 5, 7, 6, 3])
// ([4, 2, 8, 1, 5, 7, 6, 3])
// ([4, 2, 1, 8, 5, 7, 6, 3])
// ([4, 2, 1, 8, 5, 7, 6, 3])
// ([4, 2, 1, 8, 5, 7, 6, 3])
// ([4, 2, 1, 8, 5, 7, 6, 3])
// ([4, 2, 1, 3, 5, 7, 6, 8])
// ([3, 2, 1, 4, 5, 7, 6, 8])

// ES2015
// function pivot(arr, start=0, end=arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }
//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//    let swapIdx = start;

//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, start, swapIdx);
//             return swapIdx;
//         }
//     }
// } 

// Quick sort pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, 
// recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

function pivot(arr, start=0, end=arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

// BigO
// Time complexity 
// Average: O(n log n)
// Worst: O(n2)
// Space complexity
// O(log n)