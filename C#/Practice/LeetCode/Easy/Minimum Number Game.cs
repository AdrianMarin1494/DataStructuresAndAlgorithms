// https://leetcode.com/problems/minimum-number-game/description/

public class Solution {
    public int[] NumberGame(int[] nums) {
    Array.Sort(nums);
    Array.Reverse(nums);
    List<int> resList = new List<int>();
    int first;
    int second;
    while (nums.Length > 0) {
        first = nums[nums.Length - 1];
        nums = nums[..^1];
        second = nums[nums.Length - 1];
        nums = nums[..^1];
        resList.Add(second);
        resList.Add(first);
    }
    return resList.ToArray();      
    }
}