// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Solution 1
    // for (let i = 0; i < nums.length + 1; i++) {
    //     if (!nums.includes(i)) {
    //         return i;
    //     }
    // }

    // Solution 2
    const sortedNums = nums.sort((a, b) => a - b);
    if (sortedNums[0] !== 0) return 0;
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i+1] - sortedNums[i] === 2) {
            return sortedNums[i] + 1;
        }
    }
    return sortedNums[sortedNums.length - 1] + 1;
};