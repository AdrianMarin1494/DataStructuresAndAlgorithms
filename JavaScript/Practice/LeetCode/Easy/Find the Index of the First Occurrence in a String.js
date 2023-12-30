// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i+j]) {
                break;
            }

            if (j === needle.length - 1) {
                return i;
            }
        }
    }
    return -1;
};