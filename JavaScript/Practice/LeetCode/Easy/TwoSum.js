// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const valueIndexPairs = {};
    let difference;

    for (let i = 0; i < nums.length; i++) {
        difference = target - nums[i];
        if (valueIndexPairs[difference] !== undefined) {
            return [valueIndexPairs[difference], i]
        }
        valueIndexPairs[nums[i]] = i;
    }
    return [];
};