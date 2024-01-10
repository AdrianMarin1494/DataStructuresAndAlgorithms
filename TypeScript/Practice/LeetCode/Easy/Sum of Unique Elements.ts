// https://leetcode.com/problems/sum-of-unique-elements/description/

function sumOfUnique(nums: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            sum += nums[i];
        }
    }

    return sum;    
};