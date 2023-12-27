// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
    let sumNums: number[] = [];
    let theSum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        theSum += nums[i];
        sumNums.push(theSum);
    }
    return sumNums;
};