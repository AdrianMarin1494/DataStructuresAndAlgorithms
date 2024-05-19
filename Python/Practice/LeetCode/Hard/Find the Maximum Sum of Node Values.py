# https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/?envType=daily-question&envId=2024-05-19

class Solution:
    def maximumValueSum(self, nums: list[int], k: int, edges: list[list[int]]) -> int:
        import sys
        n = len(nums)
        cnt = 0
        sac = sys.maxsize  # Use sys.maxsize to represent INT_MAX
        total_sum = 0
        
        for num in nums:
            x = num
            y = num ^ k
            if x > y:
                total_sum += x
            else:
                total_sum += y
                cnt += 1
            sac = min(sac, abs(x - y))
        
        if cnt % 2 == 1:
            total_sum -= sac
        
        return total_sum