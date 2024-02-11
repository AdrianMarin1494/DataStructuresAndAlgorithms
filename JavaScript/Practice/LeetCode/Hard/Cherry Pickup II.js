// https://leetcode.com/problems/cherry-pickup-ii/?envType=daily-question&envId=2024-02-11

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Initialize the 3D DP array with -1
    const DP = new Array(rows).fill(null).map(() => new Array(cols).fill(null).map(() => new Array(cols).fill(-1)));

    // Base case: bottom row
    for (let j1 = 0; j1 < cols; ++j1) {
        for (let j2 = 0; j2 < cols; ++j2) {
            DP[rows - 1][j1][j2] = grid[rows - 1][j1];
            if (j1 !== j2) {
                DP[rows - 1][j1][j2] += grid[rows - 1][j2];
            }
        }
    }

    // Iterate from the second-to-last row up to the top
    for (let i = rows - 2; i >= 0; --i) {
        for (let j1 = 0; j1 < cols; ++j1) {
            for (let j2 = 0; j2 < cols; ++j2) {
                let cherries = grid[i][j1];
                if (j1 !== j2) {
                    cherries += grid[i][j2];
                }

                // Iterate over the possible next positions for both robots
                for (let nj1 = j1 - 1; nj1 <= j1 + 1; ++nj1) {
                    for (let nj2 = j2 - 1; nj2 <= j2 + 1; ++nj2) {
                        // Check if the next positions are within bounds
                        if (nj1 >= 0 && nj1 < cols && nj2 >= 0 && nj2 < cols) {
                            DP[i][j1][j2] = Math.max(DP[i][j1][j2], cherries + DP[i + 1][nj1][nj2]);
                        }
                    }
                }
            }
        }
    }

    // The answer is stored in DP[0][0][cols - 1]
    return DP[0][0][cols - 1];
};
