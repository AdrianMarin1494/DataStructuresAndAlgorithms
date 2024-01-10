// https://leetcode.com/problems/find-the-difference-of-two-arrays/

public class Solution {
    public IList<IList<int>> FindDifference(int[] nums1, int[] nums2) {
        List<int> nums1Distinct = new List<int>();
        List<int> nums2Distinct = new List<int>();

        for (int i = 0; i < nums1.Length; i++)
        {
            if (!Array.Exists(nums2, num => num == nums1[i]) && !nums1Distinct.Contains(nums1[i]))
            {
                nums1Distinct.Add(nums1[i]);
            }
        }

        for (int i = 0; i < nums2.Length; i++)
        {
            if (!Array.Exists(nums1, num => num == nums2[i]) && !nums2Distinct.Contains(nums2[i]))
            {
                nums2Distinct.Add(nums2[i]);
            }
        }

        return new List<IList<int>> { nums1Distinct, nums2Distinct };
    }
}