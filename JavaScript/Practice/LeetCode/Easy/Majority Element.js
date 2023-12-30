// https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsFrequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (numsFrequency[nums[i]] === undefined) {
            numsFrequency[nums[i]] = 1;
        } else {
            numsFrequency[nums[i]] += 1;
        }
    }
    let maxFrequencyNumber = nums[0];
    for (let num in numsFrequency) {
        if (numsFrequency[num] > numsFrequency[maxFrequencyNumber]) {
            maxFrequencyNumber = num;
        }
    }
    return maxFrequencyNumber;
};