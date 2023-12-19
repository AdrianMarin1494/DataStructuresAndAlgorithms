// https://leetcode.com/problems/richest-customer-wealth/description/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > richest) {
            richest = currentWealth;
        }
    }
    return richest;
};