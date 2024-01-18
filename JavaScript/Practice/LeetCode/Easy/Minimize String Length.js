// https://leetcode.com/problems/minimize-string-length/description/

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    return (new Set(s)).size;
};