// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

class Solution {
    public int maximizeSum(int[] nums, int k) {
        Arrays.sort(nums);

        int kSum = 0;

        for (int i = 0; i < k; i++) {
            kSum += i;
        }
        
        return nums[nums.length - 1] * k + kSum;   
    }
}