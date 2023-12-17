// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sFrequency = {};
    const tFrequency = {};

    for (let i = 0; i < s.length; i++) {
        if (sFrequency[s[i]] === undefined) {
            sFrequency[s[i]] = 1;
        } else {
            sFrequency[s[i]] += 1;
        }
        if (tFrequency[t[i]] === undefined) {
            tFrequency[t[i]] = 1;
        } else {
            tFrequency[t[i]] += 1;
        }
    }

    for (let i in sFrequency) {
        if (sFrequency[i] !== tFrequency[i]) {
            return false
        }
    }

    return true;
};