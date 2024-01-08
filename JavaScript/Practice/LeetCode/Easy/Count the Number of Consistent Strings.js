// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let consistentStringsCounter = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                break;
            }
            if (j === words[i]. length - 1) {
                consistentStringsCounter++;
            }
        }
    }
    return consistentStringsCounter;
};