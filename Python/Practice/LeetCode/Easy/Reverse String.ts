// https://leetcode.com/problems/reverse-string/description/

/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    for (let i = s.length - 1; i >= Math.floor(s.length / 2); i--) {
        let swap = s[s.length-1-i];
        s[s.length-1-i] = s[i];
        s[i] = swap;
    }
};