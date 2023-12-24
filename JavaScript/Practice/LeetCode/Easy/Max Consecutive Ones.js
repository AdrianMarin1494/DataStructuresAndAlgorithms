// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let consecutiveOnes = 0;
    let maximumConsecutiveOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            consecutiveOnes++;
        } else {
            consecutiveOnes = 0;
        }
        if (consecutiveOnes > maximumConsecutiveOnes) {
            maximumConsecutiveOnes = consecutiveOnes;
        }
    }
    return maximumConsecutiveOnes;
};