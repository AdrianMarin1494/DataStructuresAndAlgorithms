// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let total = Math.ceil(((i + 1) * (arrLength - i)) / 2);
        sum += total * arr[i];
    }
    return sum;
};