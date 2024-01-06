// https://leetcode.com/problems/count-of-matches-in-tournament/description/

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let numberOfTeams = n;
    let matchesCounter = 0;

    while (numberOfTeams !== 1) {
        matchesCounter += Math.floor(numberOfTeams / 2);
        numberOfTeams = Math.ceil(numberOfTeams / 2);
    }
    
    return matchesCounter;
};