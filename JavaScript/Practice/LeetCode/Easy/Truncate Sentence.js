// https://leetcode.com/problems/truncate-sentence/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const sArray = s.split(" ");
    let truncatedString = sArray[0];
    for (let i = 1; i < k; i++) {
        console.log("sArray[i]: ", sArray[i]);
        truncatedString = truncatedString.concat(" " + sArray[i]);
    }
    return truncatedString;
};