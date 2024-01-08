// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

function countConsistentStrings(allowed: string, words: string[]): number {
    let consistentStringsCounter: number = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                break;
            }
            if (j === words[i]. length - 1) {
                consistentStringsCounter++;
            }
        }
    }
    return consistentStringsCounter;
};