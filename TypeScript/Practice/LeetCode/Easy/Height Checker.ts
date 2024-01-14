// https://leetcode.com/problems/height-checker/description/

function heightChecker(heights: number[]): number {
    const sortedHeights: number[] = [...heights].sort((a, b) => a - b);
    let notMatching: number = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            notMatching++;
        }
    }
    
    return notMatching;    
};