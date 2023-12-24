// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/?envType=daily-question&envId=2023-12-24

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < s.length; ++i) {
        if (i % 2 === 0) {
            counter1 += s[i] !== '0' ? 1 : 0;
            counter2 += s[i] !== '1' ? 1 : 0;
        } else {
            counter1 += s[i] !== '1' ? 1 : 0;
            counter2 += s[i] !== '0' ? 1 : 0;
        }
    }
    return Math.min(counter1, counter2);
};