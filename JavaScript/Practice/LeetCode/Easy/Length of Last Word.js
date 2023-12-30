// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedS = s.trim();
    let wordLength = 0;
    for (let i = 0; i < trimmedS.length; i++) {
        if (trimmedS[i] === " ") {
            wordLength = 0;
            continue;
        }
        wordLength++;
    }
    return wordLength;
};