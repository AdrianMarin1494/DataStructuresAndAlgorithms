// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

function maxCoins(piles: number[]): number {
    let sum: number = 0;
    let counter: number = 0;
    let idx: number = 1;

    piles.sort((a, b) => b - a);

    while (counter < piles.length / 3) {
        sum += piles[idx];
        idx += 2;
        counter++;
    }

    return sum;
};