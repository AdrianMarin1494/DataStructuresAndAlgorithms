// https://leetcode.com/problems/custom-sort-string/description/?envType=daily-question&envId=2024-03-11

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const ans = [];

    // map for storing frequencies of chars in s
    const sMap = new Map();
    for (let c of s) {
        sMap.set(c, (sMap.get(c) || 0) + 1);
    }

    // iterates through order, it already has needed custom order
    // adds chars to ans if they exist in s
    // deletes processed chars from map
    for (let c of order) {
        ans.push(c.repeat(sMap.get(c) || 0));
        sMap.delete(c);
    }

    // adds rest of the chars to ans
    // here is chars which weren't presented in order
    for (let [c, num] of sMap) {
        ans.push(c.repeat(num));
    }

    // joins ans to string
    return ans.join('');
};