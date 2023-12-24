// https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const letters = {'a':".-", 'b':"-...", 'c':"-.-.", 'd':"-..", 'e':".", 'f':"..-.", 'g':"--.", 'h':"....", 'i':"..", 'j':".---", 'k':"-.-", 'l':".-..", 'm':"--", 'n':"-.", 'o':"---", 'p':".--.", 'q':"--.-", 'r':".-.", 's':"...", 't':"-", 'u':"..-", 'v':"...-", 'w':".--", 'x':"-..-", 'y':"-.--", 'z':"--.."}
    const uniqueCodes = new Set();
    for (let i = 0; i < words.length; i++) {
        let currentCode = "";
        for (let j = 0; j < words[i].length; j++) {
            currentCode += (letters[words[i][j]]);

        }
        uniqueCodes.add(currentCode);
    }
    return uniqueCodes.size;
};