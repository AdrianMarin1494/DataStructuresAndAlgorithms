// https://leetcode.com/problems/sum-of-unique-elements/description/

public class Solution {
    public int SumOfUnique(int[] nums) {
        int sum = 0;

        for (int i = 0; i < nums.Length; i++) {
            if (Array.IndexOf(nums, nums[i]) == Array.LastIndexOf(nums, nums[i])) {
                sum += nums[i];
            }
        }

        return sum;        
    }
}