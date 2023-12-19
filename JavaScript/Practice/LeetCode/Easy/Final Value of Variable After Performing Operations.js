// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let counter = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes("+")) {
            counter++;
        }
        if (operations[i].includes("-")) {
            counter--;
        }
    }
    return counter;
};