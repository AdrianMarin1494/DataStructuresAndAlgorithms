// https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charactersFrequency = {};
    for (let i = 0; i < s.length; i++) {
        if (charactersFrequency[s[i]] === undefined) {
            charactersFrequency[s[i]] = 1
        } else {
            charactersFrequency[s[i]] += 1
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (charactersFrequency[s[j]] === 1) {
            return j;
        } 
    }
    return -1;
};