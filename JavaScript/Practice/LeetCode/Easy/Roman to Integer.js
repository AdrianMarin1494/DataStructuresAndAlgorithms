// https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const translate = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let current = translate[s[i]];
        let next = translate[s[i+1]];

        if (current < next) {
            sum += next - current;
            i++;
        } else {
            sum += current;
        }
    }

    return sum;
};