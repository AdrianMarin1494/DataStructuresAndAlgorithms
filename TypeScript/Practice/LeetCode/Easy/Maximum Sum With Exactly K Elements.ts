// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

function maximizeSum(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let kSum: number = 0;

    for (let i = 0; i < k; i++) {
        kSum += i;
    }
    
    return nums[nums.length - 1] * k + kSum;
};