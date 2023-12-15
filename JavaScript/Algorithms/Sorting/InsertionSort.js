// Builds up the sort by gradually creating a larger left half which is always sorted

// [1, 2, 9, 76, 0]
// we compare 0 with 76, 0 is smaller, we copy 76 in the place of 0
// [1, 2, 9, 76, 76]
// we compare 0 with 9, 0 is smaller, we copy 9 in the place of 76
// [1, 2, 9, 9, 76]
// we compare 0 with 2, 0 is smaller, we copy 2 in the place of 9
// [1, 2, 2, 9, 76]
// we compare 0 with 1, 0 is smaller, we copy 1 in the place of 2
// [0, 1, 2, 9, 76]

// Insertion sort pseudocode
// Start by picking the second element in the array
// Now compare the second element with one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
// (i.e. the left side) to place the element in the correct place
// Repeat until the array is sorted

// Insertion sort
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }

    return arr;
}

// [ 1, 2, 9, 76, 4 ]
// [ 1, 2, 9, 76, 4 ]
// [ 1, 2, 9, 76, 4 ]
// [ 1, 2, 4, 9, 76 ]

// Big O
// Time complexity: n squared