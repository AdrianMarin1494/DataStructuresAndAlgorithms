// https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) {
        return 1;
    }

    const trustPerPerson = {};
      
    for (let i = 0; i < trust.length; i++) {
        trustPerPerson[trust[i][1]] === undefined ? trustPerPerson[trust[i][1]] = 1 : trustPerPerson[trust[i][1]] += 1;
    }

    for (let i in trustPerPerson) {
        if (trustPerPerson[i] === n - 1) {
            for (let j = 0; j < trust.length; j++) {
                if (trust[j][0] === Number(i)) {
                    return -1;
                }
            }
            return i;
        }
    }

    return -1;
};
