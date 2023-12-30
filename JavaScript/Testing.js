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
    console.log(wordsFrequency)
    for (let j in wordsFrequency) {
        console.log(wordsFrequency[j])
        // if (wordsFrequency[joinedWords[0]] !== wordsFrequency[j]) {
        if (wordsFrequency[j] % words.length !== 0) {
            return false;
        }
    }
    return true;
};

console.log(makeEqual(["abc","aabc","bc"]))