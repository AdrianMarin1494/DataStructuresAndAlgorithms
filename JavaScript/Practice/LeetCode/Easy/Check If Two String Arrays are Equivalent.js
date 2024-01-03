// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const word1String = word1.join("");
    const word2String = word2.join("");
    return word1String === word2String;
};