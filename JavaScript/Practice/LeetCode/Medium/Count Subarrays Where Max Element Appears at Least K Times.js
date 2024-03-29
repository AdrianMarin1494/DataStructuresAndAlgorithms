// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/?envType=daily-question&envId=2024-03-29

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let maxi = -Infinity;
    for (let num of nums) {
        maxi = Math.max(maxi, num);
    }

    let cnt = 0, s = 0;
    let res = 0;
    for (let e = 0; e < nums.length; e++) {
        if (nums[e] === maxi) {
            cnt++;
        }

        while (cnt >= k) {
            res += nums.length - e;
            if (nums[s] === maxi) {
                cnt--;
            }
            s++;
        }
    }
    return res;
};