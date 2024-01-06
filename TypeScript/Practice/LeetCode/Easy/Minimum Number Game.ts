// https://leetcode.com/problems/minimum-number-game/description/

function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => b - a);
    const resArr: number[] = [];
    let first: number;
    let second: number;
    while (nums.length > 0) {
        first = nums.pop();
        second = nums.pop();
        resArr.push(second);
        resArr.push(first);
    }
    return resArr; 
};