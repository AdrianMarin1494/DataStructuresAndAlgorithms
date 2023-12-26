// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queue = [];
    let longestString = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (queue.includes(s[i])) {
            queue.shift();
        }
        queue.push(s[i]);
        if (queue.length > longestString) {
            longestString = queue.length;
        }
    }
    
    return longestString;
};