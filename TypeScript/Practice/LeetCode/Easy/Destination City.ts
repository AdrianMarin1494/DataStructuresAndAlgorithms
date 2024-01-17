// https://leetcode.com/problems/destination-city/description/

function destCity(paths: string[][]): string {
    if (paths.length === 1) {
        return paths[0][1];
    }

    const startingDestinations = [];

    for (let i = 0; i < paths.length; i++) {
        startingDestinations.push(paths[i][0]);
    }

    for (let i = 0; i < paths.length; i++) {
        if (!startingDestinations.includes(paths[i][1])) {
            return paths[i][1];
        }
    }
};