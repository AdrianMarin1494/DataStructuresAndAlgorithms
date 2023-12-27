// https://leetcode.com/problems/chunk-array/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
// Solution 1
// check if the array length is 0 and return an empty array
// create the start equal with 0
// create the end equal with the size
// create a loop to iterate throuh arr
// push the slice (start, end) on the result array
// check if the start is greater than the arr length and break
// increase the start by the size
// check if the end + size are greater than the arr length and make end equal to array length
// else the end is increased by the size
// return the slicedarray list
var chunk = function(arr, size) {
    if (arr.length === 0) {
        return [];
    }
    const slicedArr = [];
    let start = 0;
    let end = size;

    while (true) {
        slicedArr.push(arr.slice(start, end));

        if (start + size >= arr.length) {
            break;
        }
        start += size;

        if (end + size > arr.length) {
            end = arr.length;
        } else {
            end += size;
        }
        
    }
    return slicedArr;
};