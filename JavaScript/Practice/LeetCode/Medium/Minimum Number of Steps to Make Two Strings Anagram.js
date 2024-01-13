// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // create an object to count each letter
    // create an stepsCounter
    // iterate over s(can be also t)
    // add the letter on the table if is already in increment the value
    // iterate over s letters object
    // if the letter is not in t object, add the value to the steps counter
    // if the value is greater on s than t, add the difference on the steps counter
    // return the steps counter

    // s {b: 2, a: 1}
    // t {b: 1, a: 2}
    //     2 - 1 = 1

    // s  {l: 1, e: 3, t: 1, c: 1, o: 1, d: 1}
    // t: {p: 1, r: 1, a: 1, c: 2, t: 1, i: 1, e: 1}
    //     l + 1
    //     e + 2
    //     t + 0
    //     c + 0
    //     o + 1
    //     d + 1

    const sLetters = {};
    const tLetters = {};
    let stepsCounter = 0;

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