// https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const nums1Distinct = [];
    const nums2Distinct = [];

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !nums1Distinct.includes(nums1[i])) {
            nums1Distinct.push(nums1[i]);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]) && !nums2Distinct.includes(nums2[i])) {
            nums2Distinct.push(nums2[i]);
        }
    }
    
    return [nums1Distinct, nums2Distinct];
};