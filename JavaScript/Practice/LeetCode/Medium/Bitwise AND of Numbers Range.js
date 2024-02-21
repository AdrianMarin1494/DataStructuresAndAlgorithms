// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/?envType=daily-question&envId=2024-02-21

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let counter = 0;

    while (left !== right) {
        left >>= 1;
        right >>= 1;
        counter++;
    }

    return left << counter;
};