// https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort((a, b) => b[k] - a[k]);
    return score;
};