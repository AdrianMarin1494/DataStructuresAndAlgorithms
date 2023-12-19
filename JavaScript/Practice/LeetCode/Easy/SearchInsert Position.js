// https://leetcode.com/problems/search-insert-position/

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;

    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return start;
};