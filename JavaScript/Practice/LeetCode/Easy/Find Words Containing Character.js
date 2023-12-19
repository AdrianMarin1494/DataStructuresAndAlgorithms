// https://leetcode.com/problems/find-words-containing-character/description/

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const indexes = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indexes.push(i);
        }
    }
    return indexes;
};