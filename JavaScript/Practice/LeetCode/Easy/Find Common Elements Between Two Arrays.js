// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    // add 2 vars: indicesCounterNums1 / indicesCounterNums2
    // iterate over nums1 and check if the number is included on nums2, increase indicesCounterNums1
    // iterate over nums2 and check if the number is included on nums1, increase indicesCounterNums2
    // return arr[indicesCounterNums1, indicesCounterNums2]

    let indicesCounterNums1 = 0;
    let indicesCounterNums2 = 0;

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

    return [indicesCounterNums1, indicesCounterNums2];
};