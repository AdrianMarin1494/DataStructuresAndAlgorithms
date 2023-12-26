// https://leetcode.com/problems/power-of-three/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for (let i = 0; 3**i <= n; i++) {
        if (3**i === n) {
            return true
        }
    }
    return false;
};