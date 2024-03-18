// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=daily-question&envId=2024-03-18

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    for (let i = 1; i < points.length; ++i) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows;
}