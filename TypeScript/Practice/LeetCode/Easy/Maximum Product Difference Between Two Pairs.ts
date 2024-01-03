// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

function maxProductDifference(nums: number[]): number {
    nums.sort((a, b) => b - a);
    return (nums[0] * nums[1]) - (nums[nums.length-1] * nums[nums.length-2]);
};