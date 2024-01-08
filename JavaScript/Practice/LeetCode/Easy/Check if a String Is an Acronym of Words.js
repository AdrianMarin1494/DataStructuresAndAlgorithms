// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) return false;

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== s[i][0]) {
            return false;
        }
    }

    return true;
};