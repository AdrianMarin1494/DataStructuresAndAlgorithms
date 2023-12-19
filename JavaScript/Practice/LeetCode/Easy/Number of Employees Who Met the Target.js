// https://leetcode.com/problems/number-of-employees-who-met-the-target/submissions/

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let counter = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            counter++;
        }
    }
    return counter;
};