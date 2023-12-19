// https://leetcode.com/problems/build-array-from-permutation/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }
    return result;
};