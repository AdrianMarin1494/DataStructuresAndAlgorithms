// https://leetcode.com/problems/power-of-two/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 0;
    while (n > 2**power) {
        power += 1;
    }
    return n === 2**power;
};