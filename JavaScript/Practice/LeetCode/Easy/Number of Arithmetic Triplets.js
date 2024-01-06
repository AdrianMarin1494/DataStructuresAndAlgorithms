// https://leetcode.com/problems/number-of-arithmetic-triplets/description/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let counter = 0;
    for (let num of nums) {
        if (nums.includes(num + diff) && nums.includes(num + diff*2)) {
            counter++;
        }
    }
    return counter;
};