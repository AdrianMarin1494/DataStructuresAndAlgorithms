// https://leetcode.com/problems/single-number//

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let numbersFrequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (numbersFrequency[nums[i]] === undefined) {
        numbersFrequency[nums[i]] = 1;
    } else {
        numbersFrequency[nums[i]] = numbersFrequency[nums[i]] + 1;
    }
  }
  for (let j in numbersFrequency) {
    if (numbersFrequency[j] === 1) {
        return j
    }
  }
};

console.log(singleNumber([2, 3, 3, 5, 5]));