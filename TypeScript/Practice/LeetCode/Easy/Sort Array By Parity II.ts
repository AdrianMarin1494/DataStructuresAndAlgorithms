// https://leetcode.com/problems/sort-array-by-parity-ii/description/

function sortArrayByParityII(nums: number[]): number[] {
    const odds: number[] = [];
    const evens: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }

    for (let i = 0; i < evens.length; i++) {
        result.push(evens[i]);
        result.push(odds[i]);
    }

    return result; 
};