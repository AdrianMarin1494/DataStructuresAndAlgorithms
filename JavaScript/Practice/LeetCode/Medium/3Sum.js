// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 0) break;
        if (i > 0 && num === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const threeSum = num + nums[left] + nums[right];
            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                res.push([num, nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res;
};