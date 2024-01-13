// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13

function minSteps(s: string, t: string): number {
    const sLetters: {[index: string]: number} = {};
    const tLetters: {[index: string]: number} = {};
    let stepsCounter: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (sLetters[s[i]] === undefined) {
            sLetters[s[i]] = 1;
        } else {
            sLetters[s[i]] += 1;
        }

        if (tLetters[t[i]] === undefined) {
            tLetters[t[i]] = 1;
        } else {
            tLetters[t[i]] += 1;
        }
    }

    for (let i in sLetters) {
        if (tLetters[i] === undefined) {
            stepsCounter += sLetters[i];
        }
        if (sLetters[i] > tLetters[i]) {
            stepsCounter += sLetters[i] - tLetters[i]; 
        }
    }

    return stepsCounter;   
};