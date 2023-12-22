// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/?envType=daily-question&envId=2023-12-22

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let maxSum = 0;
    let leftZeros = 0;
    let rightOnes = s.split('1').length - 1;

    for (let i = 0; i < s.length - 1; i++) {
        leftZeros += s[i] === '0' ? 1 : 0;
        rightOnes -= s[i] === '1' ? 1 : 0;
        maxSum = Math.max(maxSum, leftZeros + rightOnes);
    }

    return maxSum;
};