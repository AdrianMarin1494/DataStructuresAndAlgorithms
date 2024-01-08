// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    return (nums[nums.length - 2] - 1) * (nums[nums.length - 1] - 1);
};