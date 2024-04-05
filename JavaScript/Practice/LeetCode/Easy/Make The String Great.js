// https://leetcode.com/problems/make-the-string-great/description/?envType=daily-question&envId=2024-04-05

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    for (let c of s) {
        if (stack.length && Math.abs(stack[stack.length - 1].charCodeAt() - c.charCodeAt()) == 32) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
};