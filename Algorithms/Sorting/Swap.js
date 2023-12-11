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