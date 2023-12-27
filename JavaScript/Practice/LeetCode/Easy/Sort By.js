// https://leetcode.com/problems/sort-by/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const sortedArray = arr.sort((a, b) => fn(a) - fn(b));
    return sortedArray;
};