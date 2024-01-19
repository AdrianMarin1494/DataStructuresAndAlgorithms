// https://leetcode.com/problems/minimum-falling-path-sum/?envType=daily-question&envId=2024-01-19

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {

    for (let i = 1; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            let a = matrix[i - 1][j - 1] != undefined  ? matrix[i - 1][j - 1] : Infinity;
            let b = matrix[i - 1][j ] != undefined ? matrix[i - 1][j ] : Infinity;
            let c = matrix[i - 1][j + 1] != undefined ? matrix[i - 1][j + 1] : Infinity;

            matrix[i][j] = matrix[i][j] + Math.min(a, b, c);
        }
    }

    return Math.min(...matrix[matrix.length - 1]);
};