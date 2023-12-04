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