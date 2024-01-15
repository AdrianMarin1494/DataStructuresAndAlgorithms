// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/?envType=daily-question&envId=2024-01-15

function findWinners(matches: number[][]): number[][] {
    const playersOne: number[] = [];
    const playersZero: number[] = [];
    const playersLoses: {[index: string] : number} = {};

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

    return [[...playersZero], [...playersOne]];    
};