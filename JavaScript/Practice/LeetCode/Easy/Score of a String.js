// https://leetcode.com/problems/score-of-a-string/description/?envType=daily-question&envId=2024-06-01

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let absoluteSumOfASCIIValues = 0;
    for (let i = 1; i < s.length; i++) {
        absoluteSumOfASCIIValues += Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i));
    }

    return absoluteSumOfASCIIValues;
};