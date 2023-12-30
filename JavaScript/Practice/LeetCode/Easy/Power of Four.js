// https://leetcode.com/problems/power-of-four/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let power = 0;
    while (4**power < n) {
        power++;
    }
    return 4**power === n ? true : false;
};