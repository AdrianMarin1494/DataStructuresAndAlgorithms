// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1, 1];
    for(let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
};