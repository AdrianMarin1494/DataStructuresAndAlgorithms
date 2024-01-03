// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        let bits = eval((i).toString(2).split('').join('+'))
        if(k === bits) {
            sum += nums[i]
        }
    }
    return sum
};