// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    let indicesCounterNums1: number = 0;
    let indicesCounterNums2: number = 0;

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            indicesCounterNums1++;
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (nums1.includes(nums2[j])) {
            indicesCounterNums2++;
        }
    }

    return [indicesCounterNums1, indicesCounterNums2]
};