// https://leetcode.com/problems/minimum-common-value/description/?envType=daily-question&envId=2024-03-09

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let first = 0;
    let second = 0;

    while (first < nums1.length && second < nums2.length) {
        if (nums1[first] === nums2[second]) {
            return nums1[first];
        } else if (nums1[first] > nums2[second]) {
            second++;
        } else if (nums1[first] < nums2[second]) {
            first++;
        };
    }
    
    return -1;
};