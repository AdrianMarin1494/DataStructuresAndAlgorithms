// https://leetcode.com/problems/sum-of-unique-elements/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            sum += nums[i];
        }
    }

    return sum;
};