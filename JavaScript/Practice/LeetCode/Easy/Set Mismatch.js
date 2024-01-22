// https://leetcode.com/problems/set-mismatch/description/?envType=daily-question&envId=2024-01-22

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate, missing;

    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        
        if (nums[num - 1] < 0) {
            duplicate = num;
        } else {
            nums[num - 1] = -nums[num - 1];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            missing = i + 1;
            break;
        }
    }

    return [duplicate, missing];
};