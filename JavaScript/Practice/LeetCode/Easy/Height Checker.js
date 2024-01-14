// https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let notMatching = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            notMatching++;
        }
    }
    
    return notMatching;
};