// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const letters = new Set();
    for (let i = 0; i < sentence.length; i++) {
        letters.add(sentence[i]);
    }

    return letters.size === 26;
};