// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

function maxProduct(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return (nums[nums.length - 2] - 1) * (nums[nums.length - 1] - 1);    
};