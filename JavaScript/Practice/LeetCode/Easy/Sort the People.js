// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const namesAndHeights = [];
    const sortedPeople = [];

    for (let i = 0; i < names.length; i++) {
        namesAndHeights.push([names[i], heights[i]]);
    }

    namesAndHeights.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < namesAndHeights.length; i++) {
        sortedPeople.push(namesAndHeights[i][0]);
    }
    
    return sortedPeople;
};