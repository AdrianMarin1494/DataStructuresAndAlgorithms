// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const digits = [];
    let score = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            digits.push(digits[digits.length-1] + digits[digits.length-2]);
        } else if (operations[i] === "D") {
            digits.push(digits[digits.length-1] * 2);
        } else if (operations[i] === "C") {
            digits.pop();
        } else {
            digits.push(Number(operations[i]));
        }
    }

    for (let i = 0; i < digits.length; i++) {
        score += digits[i];
    }

    return score;
};