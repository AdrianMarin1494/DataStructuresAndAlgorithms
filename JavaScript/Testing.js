/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // object: key: player, value: loses
    // {
    //     "3": 2,
    //     "6": 2,
    //     "7": 1,
    //     "5": 1,
    //     "8": 1,
    //     "9": 2,
    //     "4": 1
    // }
    // take the players who lost only 1 from here
    // if object[matches[i]] === undefined, the player didn t lost and add it to the first array

    const playersOne = [];
    const playersZero = [];
    const playersLoses = {};

    for (let i = 0; i < matches.length; i++) {
        if (playersLoses[matches[i][1]] === undefined) {
            playersLoses[matches[i][1]] = 1;
        } else {
            playersLoses[matches[i][1]] += 1;
        }
    }

    for (let player in playersLoses) {
        if (playersLoses[player] === 1) {
            playersOne.push(Number(player));
        }
    }

    for (let i = 0; i < matches.length; i++) {
        if (playersLoses[matches[i][0]] === undefined && !playersZero.includes(matches[i][0])) {
            playersZero.push(matches[i][0]);
        }
    }

    playersOne.sort((a, b) => a - b);
    playersZero.sort((a, b) => a - b);

    console.log([playersZero], [playersOne]);
    return [[...playersZero], [...playersOne]];
};


findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]);