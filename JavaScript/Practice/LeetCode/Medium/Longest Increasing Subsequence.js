// https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=daily-question&envId=2024-01-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let values = [];
    let result = -1;
    for(let i = 0; i < nums.length; i++) {
        values[i] = 1;
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]){
                values[i] = Math.max(values[i], values[j]+1);
            }
        }
        result = Math.max(result, values[i]);
    }
    console.log(values);
    return result;
};