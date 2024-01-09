// https://leetcode.com/problems/reverse-prefix-of-word/description/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    // create: array: wordsLetters: include the letters from the word
    // create: boolean: reversed: start it as false and change it to true after the prefix is found
    // iterate over word
    // push the word current character to array
    // if the prefix ch is found and reversed is false, reverse wordsLetters and change reversed boolean to true
    // return the string version of wordsLetters

    const wordLetters = [];
    let reversed = false;

    for (let i = 0; i < word.length; i++) {
        wordLetters.push(word[i]);
        
        if (word[i] === ch && !reversed) {
            wordLetters.reverse();
            reversed = true;
        }
    }

    return wordLetters.join("");
};