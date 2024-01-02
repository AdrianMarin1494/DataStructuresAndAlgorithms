// https://leetcode.com/problems/sorting-the-sentence/description/

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const sArray = s.split(" ");
    sArray.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    let result = sArray[0].slice(0, sArray[0].length - 1);
    for (let i = 1; i < sArray.length; i++) {
        let word = sArray[i].slice(0, sArray[i].length - 1);
        result = result.concat(" " + word);
    }
    return result;
};