// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0;
    while (matrix[row] !== undefined) {
        let left = 0;
        let right = matrix[row].length - 1;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            let currentNum = matrix[row][middle];
            if (currentNum === target) {
                return true;
            } else if (currentNum > target) {
                right = middle - 1;
            } else if (currentNum < target) {
                left = middle + 1;
            }
        }
        row++;
    }
    return false;
}