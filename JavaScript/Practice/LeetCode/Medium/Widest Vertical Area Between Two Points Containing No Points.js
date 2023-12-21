// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/submissions/?envType=daily-question&envId=2023-12-21

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const sortedPoints = points.sort((a, b) => b[0] - a[0]);
    let max = 0;
    for (let i = 1; i < sortedPoints.length; i++) {
        if (max < sortedPoints[i - 1][0] - sortedPoints[i][0]) {
            max = sortedPoints[i - 1][0] - sortedPoints[i][0];
        }
    }
    return max;
};