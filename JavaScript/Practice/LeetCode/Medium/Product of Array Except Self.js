// https://leetcode.com/problems/product-of-array-except-self/description/?envType=daily-question&envId=2024-03-15

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [1];
    let prefix = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        prefix *= nums[i];
        result.push(prefix);
    }
    let sufix = 1;
    for (let j = nums.length - 2; j >= 0; j--) {
        sufix *= nums[j + 1];
        result[j] *= sufix;
    }
    return result;
};