// https://leetcode.com/problems/sort-array-by-parity-ii/description/

public class Solution {
    public int[] SortArrayByParityII(int[] nums) {
        List<int> odds = new List<int>();
        List<int> evens = new List<int>();
        List<int> result = new List<int>();

        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] % 2 == 0) {
                evens.Add(nums[i]);
            } else {
                odds.Add(nums[i]);
            }
        }

        for (int i = 0; i < evens.Count; i++) {
            result.Add(evens[i]);
            result.Add(odds[i]);
        }

        return result.ToArray();  
    }
}