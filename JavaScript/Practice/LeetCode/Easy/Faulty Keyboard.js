// https://leetcode.com/problems/faulty-keyboard/description/

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let faultyString = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "i") {
            faultyString = faultyString.split("").reverse().join("");
        } else {
            faultyString = faultyString.concat(s[i]);
        }
    }
    return faultyString;
};