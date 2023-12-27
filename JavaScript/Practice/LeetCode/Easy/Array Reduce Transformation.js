// https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Solution 1
    // create a condition if the length of the array nums is equal to 0 return init
    // create a variable numsSum for sum = init
    // iterate through nums
    // call the fn(numsSum, currentNumber)
    // return numsSum
    if (nums.length === 0) {
        return init;
    }
    let sum = init;
    for (let currentNumber of nums) {
        sum = fn(sum, currentNumber);
    }
    return sum;
};