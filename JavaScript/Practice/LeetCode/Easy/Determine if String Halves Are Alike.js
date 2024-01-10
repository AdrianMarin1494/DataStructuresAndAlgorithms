// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const firstHalf = [];
    const secondHalf = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < s.length / 2; i++) {
        let firstHalfLetter = s[i];
        let secondHalfLetter = s[s.length - i - 1];
        if (vowels.includes(firstHalfLetter)) {
            firstHalf.push(firstHalfLetter);
        }
        if (vowels.includes(secondHalfLetter)) {
            secondHalf.push(secondHalfLetter);
        }
    }
return firstHalf.length === secondHalf.length;    
};