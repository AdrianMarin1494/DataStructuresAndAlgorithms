// https://leetcode.com/problems/add-digits/description/

// https://leetcode.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let digits = new String(num).split("");
    let sum = 0;

    while (digits.length > 1) {
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i]);
        }

        digits = new String(sum).split("");
        sum = 0;
    }

    return Number(digits[0]);
};