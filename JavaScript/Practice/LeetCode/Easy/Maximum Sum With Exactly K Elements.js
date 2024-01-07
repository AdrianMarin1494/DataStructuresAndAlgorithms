// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    // sort the array
    // select the last item of the array
    // return the selected item or * k + k -1

    nums.sort((a, b) => a - b);

    let kSum = 0;

    for (let i = 0; i < k; i++) {
        kSum += i;
    }
    
    return nums[nums.length - 1] * k + kSum;
};