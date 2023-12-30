// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/?envType=daily-question&envId=2023-12-30

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const joinedWords = words.join("");
    const wordsFrequency = {};
    for (let i = 0; i < joinedWords.length; i++) {
        if (wordsFrequency[joinedWords[i]] === undefined) {
            wordsFrequency[joinedWords[i]] = 1;
        } else {
            wordsFrequency[joinedWords[i]] += 1;
        }
    }
    for (let j in wordsFrequency) {
        if (wordsFrequency[j] % words.length !== 0) {
            return false;
        }
    }
    return true;
};