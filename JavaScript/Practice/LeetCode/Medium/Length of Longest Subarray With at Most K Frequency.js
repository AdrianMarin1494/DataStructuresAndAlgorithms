// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/?envType=daily-question&envId=2024-03-28

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map();
    let left = 0
    let right = 0;
    let maxValue = 0;

    while(right < nums.length) {
        maxValue = Math.max(maxValue, right-left);
        map.set(nums[right], map.get(nums[right])+1 || 1);
        while(map.get(nums[right]) > k) {
            map.set(nums[left], map.get(nums[left])-1);
            left++;
        }
        right++;
    }
    return Math.max(maxValue, right-left);
};