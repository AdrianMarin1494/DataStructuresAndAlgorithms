// https://leetcode.com/problems/count-elements-with-maximum-frequency/description/?envType=daily-question&envId=2024-03-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const numFrequency = {};

    for (let i = 0; i < nums.length; i++) {
        if (numFrequency[nums[i]] === undefined) {
            numFrequency[nums[i]] = 1;
        } else {
            numFrequency[nums[i]] += 1
        }
    }

    let highestFrequency = 0;

    for (let i in numFrequency) {
        if (numFrequency[i] > highestFrequency) {
            highestFrequency = numFrequency[i];
        }
    }

    let highestFrequencyCounter = 0;

    for (let i in numFrequency) {
        if (numFrequency[i] === highestFrequency) {
            highestFrequencyCounter += highestFrequency;
        }
    }

    return highestFrequencyCounter;
};