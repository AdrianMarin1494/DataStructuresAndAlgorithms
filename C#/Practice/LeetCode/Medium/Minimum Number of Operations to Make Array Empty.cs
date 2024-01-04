// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/?envType=daily-question&envId=2024-01-04

public class Solution {
    public int MinOperations(int[] nums) {
        var dic = CreateMinOperationsDictionary(nums);
        var rs = 0;
        foreach (var item in dic)
        {
            if (item.Value == 1) return -1;
            if (item.Value % 3 == 0)
            {
                rs += item.Value / 3;
            }
            else
            {
                rs += item.Value / 3 + 1;
            }
        }
        return rs;
    }
    private Dictionary<int, int> CreateMinOperationsDictionary(int[] nums)
    {
        var dic = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (!dic.ContainsKey(nums[i])) dic.Add(nums[i], 0);
            dic[nums[i]]++;
        }
        return dic;
    }
}