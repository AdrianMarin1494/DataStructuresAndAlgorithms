// https://leetcode.com/problems/find-the-duplicate-number/description/?envType=daily-question&envId=2024-03-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let ind = Math.abs(nums[i]);
        if (nums[ind] < 0) {
            return ind;
        }
        nums[ind] = -nums[ind];
    }
    return -1;
};