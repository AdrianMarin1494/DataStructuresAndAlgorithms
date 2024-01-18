// https://leetcode.com/problems/robot-return-to-origin/description/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const movesFrequency = {};

    for (let i = 0; i < moves.length; i++) {
        if (movesFrequency[moves[i]] === undefined) {
            movesFrequency[moves[i]] = 1;
        } else {
            movesFrequency[moves[i]] += 1;
        }
    }

    if (movesFrequency["U"] === movesFrequency["D"] && movesFrequency["L"] === movesFrequency["R"]) {
        return true;
    } else {
        return false;
    }
};