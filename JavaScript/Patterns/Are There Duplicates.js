// Are There Duplicates One Liner Solution
function areThereDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

// console.log(areThereDuplicates([1, 2, 3]));
// console.log(areThereDuplicates([1, 1, 2, 3]));

// Are There Duplicates Solution (Frequency Counter)
function areThereDuplicatesFrequencyCounter(arr) {
    let collection = {};
    for (let val in arr) {
        collection[arr[val]] = (collection[arr[val]] || 0) + 1;
    }

    for (let key in collection) {
        if (collection[key] > 1) { 
            return true;
        }
    }
    return false;
}

// console.log(areThereDuplicatesFrequencyCounter([1, 2, 3]));
// console.log(areThereDuplicatesFrequencyCounter([1, 1, 2, 3]));

// Are There Duplicates Solution (Multiple Pointers)
function areThereDuplicatesMultiplePointers(arr) {
    let sortedArr = arr.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < sortedArr.length) {
        if (sortedArr[start] === sortedArr[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// console.log(areThereDuplicatesMultiplePointers([1, 2, 3]));
// console.log(areThereDuplicatesMultiplePointers([1, 1, 2, 3]));