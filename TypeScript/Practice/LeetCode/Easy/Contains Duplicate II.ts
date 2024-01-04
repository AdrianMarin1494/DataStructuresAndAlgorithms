// https://leetcode.com/problems/contains-duplicate-ii/description/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numsAndIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        if (numsAndIndexes[nums[i]] === undefined) {
            numsAndIndexes[nums[i]] = i;
        } else {
            if (Math.abs(numsAndIndexes[nums[i]] - i) <= k) {
                return true;
            }
            numsAndIndexes[nums[i]] = i;
        }
    }
    return false;  
};