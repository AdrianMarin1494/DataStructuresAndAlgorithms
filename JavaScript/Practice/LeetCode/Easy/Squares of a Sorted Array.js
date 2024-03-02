// https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=daily-question&envId=2024-03-02

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const sortedSquares = []

    for (let i = 0; i < nums.length; i++) {
        sortedSquares.push(nums[i]**2)
    }
    sortedSquares.sort((a, b) => a - b)

    return sortedSquares;
};