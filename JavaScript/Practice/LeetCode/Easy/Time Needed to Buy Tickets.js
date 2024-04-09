// https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=daily-question&envId=2024-04-09

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let counter = 0;
    let idx = 0;

    while (true) { 
        if (tickets[idx] > 0) {
            tickets[idx] -= 1;
            counter++;

            if (idx === k && tickets[idx] === 0) {
                return counter;
            } else {
                idx++;
            }

        } else if (tickets[idx] === 0) {
            idx++;
        }
        
        if (idx === tickets.length) {
            idx = 0;
            continue;
        }
    }
};