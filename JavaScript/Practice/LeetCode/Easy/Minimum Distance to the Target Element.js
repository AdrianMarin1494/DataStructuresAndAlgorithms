// https://leetcode.com/problems/minimum-distance-to-the-target-element/

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    const arr = [];
    for(let i=0; i < nums.length; i++){
        if (nums[i] === target){
        let hi = Math.abs(i - start)
        arr.push(hi)  
        }
    }

    return Math.min(...arr)
};