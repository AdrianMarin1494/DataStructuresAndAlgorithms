// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numsFrequency = {};
    const numFreqArr = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (numsFrequency[nums[i]] === undefined) {
            numsFrequency[nums[i]] = 1;
        } else {
            numsFrequency[nums[i]] += 1;
        }
    }
    for (let num in numsFrequency) {
        numFreqArr.push([numsFrequency[num], num]);
    }
    numFreqArr.sort((a, b) => b[0] - a[0])
    for (let i = 0; i < k; i++) {
        result.push(Number(numFreqArr[i][1]));
    }
    return result;
};

topKFrequent([1,2,2, 2, 2,3, 3, 3], 2);