// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const shuffleArray = [];
    for (let i = 0; i < nums.length / 2; i++) {
        shuffleArray.push(nums[i]);
        shuffleArray.push(nums[i+n]);    
    }
    return shuffleArray;
};