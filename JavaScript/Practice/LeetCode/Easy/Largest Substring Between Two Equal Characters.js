// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/?envType=daily-question&envId=2023-12-31

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const charactersFrequency = {};
    let maxLength = -1;
 
    for (let character of s) {
        if (charactersFrequency[character] === undefined) {
            charactersFrequency[character] = 1;
        } else {
            charactersFrequency[character] += 1;
        }
    }
    for (let i in charactersFrequency) {
        if (charactersFrequency[i] > 1) {
            if (s.lastIndexOf(i) - s.indexOf(i) - 1 > maxLength) {
                maxLength = s.lastIndexOf(i) - s.indexOf(i) - 1;
            }
        }
    }
    return maxLength;
 };