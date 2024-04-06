// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/?envType=daily-question&envId=2024-04-06

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const chars = s.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            stack.push(i);
        } else if (chars[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = ''; 
            }
        }
    }

    while (stack.length > 0) {
        chars[stack.pop()] = ''; 
    }

    return chars.filter(char => char !== '').join('');
};