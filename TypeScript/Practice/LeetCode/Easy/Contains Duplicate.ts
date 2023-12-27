// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]): boolean {
    // Solution 1
    // Create an set, iterate through nums array, check if the set contains that value, if yes return true, if no, add the value to the set
    const checkingForDuplicates = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (checkingForDuplicates.has(nums[i])) {
            return true;
        } else {
            checkingForDuplicates.add(nums[i]);
        }
    }

    return false;
};