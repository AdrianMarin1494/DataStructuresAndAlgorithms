// https://leetcode.com/problems/count-of-matches-in-tournament/description/

function numberOfMatches(n: number): number {
    let numberOfTeams: number = n;
    let matchesCounter: number = 0;

    while (numberOfTeams !== 1) {
        matchesCounter += Math.floor(numberOfTeams / 2);
        numberOfTeams = Math.ceil(numberOfTeams / 2);
    }
    
    return matchesCounter;
};