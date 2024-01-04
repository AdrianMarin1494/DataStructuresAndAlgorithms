// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/?envType=daily-question&envId=2024-01-04

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const mp = new Map();
    
    for (let num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }
    
    let count = 0;
    for (let [key, value] of mp.entries()) {
        let t = value;
        if (t === 1) return -1;
        count += Math.floor(t / 3);
        if (t % 3 !== 0) count++;
    }
    
    return count;
};