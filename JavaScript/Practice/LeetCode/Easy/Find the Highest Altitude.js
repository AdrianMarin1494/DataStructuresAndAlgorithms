// https://leetcode.com/problems/find-the-highest-altitude/description/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let temp = [0];
    let alt = 0;
    for (let i = 0; i < gain.length; i++) {
        alt += gain[i];
        temp.push(alt);
    }
    return Math.max(...temp);
};