/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let numberOfTeams = n;
    let matchesCounter = 0;

    console.log("numberOfTeams: ", numberOfTeams)
    console.log("matchesCounter: ", matchesCounter)

    while (numberOfTeams !== 1) {
        matchesCounter += Math.floor(numberOfTeams / 2);
        numberOfTeams = Math.ceil(numberOfTeams / 2);

        console.log("numberOfTeams: ", numberOfTeams)
        console.log("matchesCounter: ", matchesCounter)
    }
    
    return matchesCounter;
};

numberOfMatches(14);