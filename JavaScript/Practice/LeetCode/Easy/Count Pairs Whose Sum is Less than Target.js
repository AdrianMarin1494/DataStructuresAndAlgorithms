// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let counter = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < target) {
            counter += right - left;
            left++;
        } else {
            right--;
        }
    }

    return counter;
};