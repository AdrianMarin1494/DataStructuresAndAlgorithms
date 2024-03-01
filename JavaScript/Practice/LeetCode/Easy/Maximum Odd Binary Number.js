// https://leetcode.com/problems/maximum-odd-binary-number/description/?envType=daily-question&envId=2024-03-01

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let chars = s.split('').sort().reverse();
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '1') {
            [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
            break;
        }
    }
    return chars.join('');
};