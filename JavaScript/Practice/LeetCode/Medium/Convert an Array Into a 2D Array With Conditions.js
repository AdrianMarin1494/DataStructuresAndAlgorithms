// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/?envType=daily-question&envId=2024-01-02

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const convertedArray = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let arrayIdx = 0;
        while (arrayIdx <= nums.length) {
            if (convertedArray[arrayIdx] === undefined) {
                convertedArray[arrayIdx] = [];
            }
            if (!convertedArray[arrayIdx].includes(nums[i])) {
                convertedArray[arrayIdx].push(nums[i])
                break;
            }
            arrayIdx++;
        }
    }
    return convertedArray;
};