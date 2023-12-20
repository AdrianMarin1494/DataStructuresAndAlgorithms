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