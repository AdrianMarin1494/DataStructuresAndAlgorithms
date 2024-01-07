// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

public class Solution {
    public int[] FindIntersectionValues(int[] nums1, int[] nums2) {
        int indicesCounterNums1 = 0;
        int indicesCounterNums2 = 0;

        for (int i = 0; i < nums1.Length; i++) {
            if (nums2.Contains(nums1[i])) {
                indicesCounterNums1++;
            }
        }
        for (int j = 0; j < nums2.Length; j++) {
            if (nums1.Contains(nums2[j])) {
                indicesCounterNums2++;
            }
        }

        return [indicesCounterNums1, indicesCounterNums2];
    }
}