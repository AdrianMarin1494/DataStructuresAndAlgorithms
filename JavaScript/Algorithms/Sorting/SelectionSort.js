// Similar to bubble sort, but instead of first placing large values
// into sorted position, it places small values into sorted position

// Example
// start at the beginning and go all the way
// looking for the minimum value and we put it at the front
// [5, 3, 4, 1, 2]
// we compare first 2 values, 5 and 3
// the minimum now is 3, we keep 3 for comparison
// now we compare 3 with 4
// now we compare 3 with 1
// now is minimum so we keep 1 for comparison
// now we compare 1 with 2 and we keep the minimum, 1
// now we swap the minimum element with what we started with
// [1, 3, 4, 5, 2]

// Selection sort pseudocode
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// Selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i != lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}

selectionSort([34, 22, 10, 19, 17]);


// i, j , lowest
// 0, 1, 1
// 0, 2, 2
// 0, 3, 2
// 0, 4, 2

// [ 34, 22, 10, 19, 17 ]
// swapping to: 
// [ 10, 22, 34, 19, 17 ]
// ************
// [ 10, 22, 34, 19, 17 ]
// swapping to: 
// [ 10, 17, 34, 19, 22 ]
// ************
// [ 10, 17, 34, 19, 22 ]
// swapping to: 
// [ 10, 17, 19, 34, 22 ]
// ************
// [ 10, 17, 19, 34, 22 ]
// swapping to: 
// [ 10, 17, 19, 22, 34 ]
// ************
// [ 10, 17, 19, 22, 34 ]

// Selection sort ES6

function selectionSortEs6(arr) {
    const sawp = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            swap(arr, i, lowest);
        }
    }

    return arr;
}