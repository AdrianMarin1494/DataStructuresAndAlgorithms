// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

public class Solution {
    public int MaximizeSum(int[] nums, int k) {
    Array.Sort(nums);

    int kSum = 0;

    for (int i = 0; i < k; i++) {
        kSum += i;
    }
    
    return nums[nums.Length - 1] * k + kSum;  
    }
}