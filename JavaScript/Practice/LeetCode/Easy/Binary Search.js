// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let currentNum = nums[middle];
        if (currentNum === target) {
            return middle;
        } else if (currentNum > target) {
            right = middle - 1;
        } else if (currentNum < target) {
            left = middle + 1;
        }
    }
    return -1;
};