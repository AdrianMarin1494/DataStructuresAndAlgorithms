// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    // create a pairsCounter
    // iterate over the words array
    // check if words includes the reversed version of the current string, if yes increment the counter
    // return the counter

    let pairsCounter = 0;

    for (let i = 0; i < words.length; i++) {
        let reversedWord = words[i].split("").reverse().join("");
        if (words.indexOf(reversedWord) > - 1 && words.indexOf(reversedWord) !== i) {
            pairsCounter++;
        }
    }
    
    return Math.floor(pairsCounter / 2);  
};
