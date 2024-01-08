// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

function isAcronym(words: string[], s: string): boolean {
    if (words.length !== s.length) return false;

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== s[i]) {
            return false;
        }
    }

    return true;
};