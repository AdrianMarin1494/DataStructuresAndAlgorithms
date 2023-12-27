// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // create an integer array tranformedList to push the results
    // Creates a loop to iterate through integer array arr
    // transofrmedList[i] = the function with arguments arr[i] and i
    const transformedList = [];
    for (let i = 0; i < arr.length; i++) {
        transformedList[i] = fn(arr[i], i);
    }
    return transformedList;
};