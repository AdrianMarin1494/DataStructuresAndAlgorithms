// https://leetcode.com/problems/maximum-69-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    // create an string from the number, create an array from the string
    // iterate over the array
    // check if one value is 6 an change to 9, after break from the loop
    // create a var to store the number version of the array, return it

    const digits = [...num.toString()];

    for (let i = 0; i < digits.length; i++) {
        console.log("digits[i]: ", digits[i])
        if (digits[i] === "6") {
            console.log("on if: ", digits[i])
            digits[i] = "9";
            break;
        }
    }

    let result = Number(digits.join(""));
    return result;
};