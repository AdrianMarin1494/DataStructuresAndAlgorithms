// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const checkingValues = {};

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (checkingValues[difference] !== undefined) {
            return [checkingValues[difference], i];
        } else {
            checkingValues[nums[i]] = i;
        };
    }
    return []
};