// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const checking = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            checking.push(s[i])
        }
        if (checking.length === 0) {
            return false;
        }
        if (s[i] === ")") {
            let lastItem = checking.pop();
            if (lastItem !== "(") {
                return false;
            }
        }
        if (s[i] === "]") {
            let lastItem = checking.pop();
            if (lastItem !== "[") {
                return false;
            }
        }
        if (s[i] === "}") {
            let lastItem = checking.pop();
            if (lastItem !== "{") {
                return false;
            }
        }
    }
    if (checking.length === 0) {
        return true;
    } else {
        return false;
    }
};