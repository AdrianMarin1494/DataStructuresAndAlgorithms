// The way that bubble sort works is that as we loop through each item we compare it to the next item, the one in fron of it, 
// and we check is this one larger than what we're comparing it to and if it is, we swap
// swapping is really important to buble sort, is how it works you basically swap if something is larger and then you compare it to the next one
// is it larger swap again compared to the next one

// A sorting algorithm where the largest values bubble up to the top
// [5, 3, 4, 1, 2]
// compare 5 and 3 and swap
// [3, 5, 4, 1, 2]
// compare 5 and 4 and swap
// [3, 4, 5, 1, 2]
// compare 5 and 1 and swap
// [3, 4, 1, 5, 2]
// compare 5 and 2 and swap
// [3, 4, 1, 2, 5]
// 5 is the largest element in the array
// and it ends up at the end
// reapeat that for every item in the array
// the items to sort decrease

// Bubble sort pseudocode
// start looping from with a variable called i the end of the array towards the beginning
// start an inner loop with a variable called j from the beggining until i - 1
// iff arr[j] is greater than arr[j + 1], swap those two values
// return the sorted array

// Bubble sort naive solution
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// Bubble sort pseudocode
// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
               
//         }
//     }

//     return arr;
// }

// Bubble sort pseudocode result

// bubbleSort([37, 45, 29, 8])
// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// [ 37, 29, 8, 45 ]
// one pass complete
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// [ 29, 8, 37, 45 ]
// one pass complete
// [ 29, 8, 37, 45 ] 29 8
// [ 8, 29, 37, 45 ]
// one pass complete
// [ 8, 29, 37, 45 ]
// one pass complete
// sorted array
// [ 8, 29, 37, 45 ]

// Bubble sort pseudocode with ES6
// function bubbleSort(arr) {
//     const swap = (swapArr, idx1, idx2) => {
//         [swapArr[idx1], swapArr[idx2]] = [swapArr[idx2], swapArr[idx1]]
//     }

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }
//         }
//     }

//     return arr;
// }

// Bubble sort pseudocode with almost sorted situation
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

// Big O for bubble sort
// Time complexity: n squared
