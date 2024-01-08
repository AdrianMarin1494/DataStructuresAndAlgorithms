/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    console.log("words: ", words)
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
        console.log("words[i]: ", words[i])
    }
    return words.join(" ");
};

reverseWords("Let's take LeetCode contest");