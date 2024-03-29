// https://leetcode.com/problems/binary-subarrays-with-sum/description/?envType=daily-question&envId=2024-03-14

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let i = 0, count = 0, res = 0;
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] === 1) {
            goal--;
            count = 0;
        }
        
        while (goal === 0 && i <= j) {
            goal += nums[i];
            i++;
            count++;
            if (i > j - goal + 1)
                break;
        }
        
        while (goal < 0) {
            goal += nums[i];
            i++;
        }
        
        res += count;
    }
    return res;
};