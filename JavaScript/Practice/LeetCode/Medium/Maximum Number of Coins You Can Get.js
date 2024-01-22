// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let sum = 0;
    let counter = 0;
    let idx = 1;

    piles.sort((a, b) => b - a);

    while (counter < piles.length / 3) {
        sum += piles[idx];
        idx += 2;
        counter++;
    }

    return sum;
};