// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!letters.includes(s[left])) {
            left += 1;
            continue;
        }
        if (!letters.includes(s[right])) {
            right -= 1;
            continue;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase() && typeof s[left] === "string" && typeof s[right] === "string") {
            return false;
        } else if (s[left] !== s[right] && typeof s[left] === "number" && typeof s[right] === "number") {
            return false
        }
        left++;
        right--;
    }
    return true;
};