// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // creates an object having the key the number and the value the index
    // loop through the array
    // if the current value is already existing in the object
    // check abs(i - j) <= k if pass return true
    
    const numsAndIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        if (numsAndIndexes[nums[i]] === undefined) {
            numsAndIndexes[nums[i]] = i;
        } else {
            if (Math.abs(numsAndIndexes[nums[i]] - i) <= k) {
                return true;
            }
            numsAndIndexes[nums[i]] = i;
        }
    }
    return false;
};