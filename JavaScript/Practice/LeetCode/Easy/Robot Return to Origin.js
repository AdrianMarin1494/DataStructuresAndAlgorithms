// https://leetcode.com/problems/robot-return-to-origin/description/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // Solution 1
    // const movesFrequency = {};

    // for (let i = 0; i < moves.length; i++) {
    //     if (movesFrequency[moves[i]] === undefined) {
    //         movesFrequency[moves[i]] = 1;
    //     } else {
    //         movesFrequency[moves[i]] += 1;
    //     }
    // }

    // if (movesFrequency["U"] === movesFrequency["D"] && movesFrequency["L"] === movesFrequency["R"]) {
    //     return true;
    // } else {
    //     return false;
    // }

    // Solution 2;
    let vertical = 0;
    let horizontal = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            vertical++;
        } else if (moves[i] === 'D') {
            vertical--;
        } else if (moves[i] === 'L') {
            horizontal--;
        } else if (moves[i] === 'R') {
            horizontal++;
        }
    }

    if (vertical === 0 && horizontal === 0) {
        return true;
    } else {
        return false;
    }
};