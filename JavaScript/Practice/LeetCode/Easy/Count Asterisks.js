// https://leetcode.com/problems/count-asterisks/description/

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    // var boolean isInsideBars: keeps track if it is inside | |
    // var counter: count the number of *
    // loop through the string
    // if it finds |, change the isInsideBars to the oposite of current state
    // if isInsideBars is true and the current character is * increment the counter
    // return the counter

    let isInsideBars = false;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "|") {
            isInsideBars = !isInsideBars;
        }
        if (!isInsideBars && s[i] === "*") {
            counter++;
        }
    }
    return counter;
};