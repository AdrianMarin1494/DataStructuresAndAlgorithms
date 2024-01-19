// https://leetcode.com/problems/sort-array-by-parity-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    // create an array for the odd values and one for the even values
    // loop through the nums and push the value to the coresponding array
    // create a result array and push one value from oddand one value from even

    const odds = [];
    const evens = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }

    for (let i = 0; i < evens.length; i++) {
        result.push(evens[i]);
        result.push(odds[i]);
    }

    return result;
};