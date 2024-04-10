// https://leetcode.com/problems/reveal-cards-in-increasing-order/description/?envType=daily-question&envId=2024-04-10

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => b - a);
    const dq = [];
    const n = deck.length;
    dq.push(deck[0]);
    for (let i = 1; i < n; i++) {
        const x = dq.pop();
        dq.unshift(x);
        dq.unshift(deck[i]);
    }

    const ans = [];
    while (dq.length > 0) {
        ans.push(dq.shift());
    }
    return ans;
};