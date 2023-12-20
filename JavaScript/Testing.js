// https://leetcode.com/problems/buy-two-chocolates/?envType=daily-question&envId=2023-12-20

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    const sortedPrices = prices.sort((a, b) => a - b);
    if (money >= sortedPrices[0] + sortedPrices[1]) {
        return money - (sortedPrices[0] + sortedPrices[1])
    } else {
        return money;
    }
};

console.log(buyChoco([1,2,2], 3));
console.log(buyChoco([5,6,8], 3));
console.log(buyChoco([1], 3));