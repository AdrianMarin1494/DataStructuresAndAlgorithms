// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 // Solution 1
 // create an integers array filteredArr
 // create a loop through integers array arr
 // create a condition to check if fn(arr[i], i) is truthy
 // if it is push arr[i] in filteredArr
 // return filteredArr
 var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};