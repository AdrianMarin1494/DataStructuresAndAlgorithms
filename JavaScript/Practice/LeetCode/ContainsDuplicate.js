// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 1
// var containsDuplicate = function(nums) {
//     const set = new Set(nums);
//     return set.size !== nums.length;
// };

// Solution 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsFrequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (numsFrequency[nums[i]] === undefined) {
            numsFrequency[nums[i]] = 1;
        } else {
            numsFrequency[nums[i]] += 1;
        }
    }

    for (let num in numsFrequency) {
        if (numsFrequency[num] !== 1) {
            return true;
        } 
    }

    return false;
};