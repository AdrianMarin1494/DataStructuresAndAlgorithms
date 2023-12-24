// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = new String(x);
    let left = 0;
    let right = stringX.length - 1;
    while (left < right) {
        if (stringX[left] !== stringX[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};