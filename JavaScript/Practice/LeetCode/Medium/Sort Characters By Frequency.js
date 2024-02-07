// https://leetcode.com/problems/sort-characters-by-frequency/description/?envType=daily-question&envId=2024-02-07

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(charCount.keys()).sort((a, b) => charCount.get(b) - charCount.get(a));

    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charCount.get(char));
    }

    return result;
};