# https://leetcode.com/problems/the-number-of-beautiful-subsets/description/?envType=daily-question&envId=2024-05-23

class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        n = len(nums)
        output = 0
        
        def dfs(i, ctr):
            nonlocal output
            if i == n:
                if ctr:
                    output += 1
                return
            
            if nums[i] - k not in ctr and nums[i] + k not in ctr:
                ctr[nums[i]] += 1
                dfs(i + 1, ctr)
                ctr[nums[i]] -= 1
                if not ctr[nums[i]]:
                    del ctr[nums[i]]
            dfs(i + 1, ctr)
        
        dfs(0, Counter())
        return output