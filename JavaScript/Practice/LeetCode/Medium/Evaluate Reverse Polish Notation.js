// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (i of tokens) {
        if (i === "+") {
            let second = stack.pop();
            let first = stack.pop();
            let result = first + second;
            stack.push(result);
        }
        else if (i === "-") {
            let second = stack.pop();
            let first = stack.pop();
            let result = first - second;
            stack.push(result);
        }
        else if (i === "*") {
            let second = stack.pop();
            let first = stack.pop();
            let result = first * second;
            stack.push(result);
        }
        else if (i === "/") {
            let second = stack.pop();
            let first = stack.pop();
            let result = parseInt(first / second);
            stack.push(result);
        } else {
            stack.push(parseInt(i));
        }
    }
    return stack;
};