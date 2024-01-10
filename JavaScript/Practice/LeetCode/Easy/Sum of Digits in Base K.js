// https://leetcode.com/problems/sum-of-digits-in-base-k/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0
    while(n>0){
        sum += n%k
        n = ~~(n/k)
    }
    return sum    
};