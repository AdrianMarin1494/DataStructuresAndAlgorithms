// https://leetcode.com/problems/intersection-of-two-arrays/description/?envType=daily-question&envId=2024-03-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const intersection = new Set();

    for (let numIdx = 0; numIdx < nums1.length; numIdx++) {
        if (nums2.includes(nums1[numIdx])) {
            intersection.add(nums1[numIdx]);
        }
    }

    return [...intersection];
};