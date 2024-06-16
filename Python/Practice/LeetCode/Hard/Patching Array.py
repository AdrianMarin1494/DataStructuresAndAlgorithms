# https://leetcode.com/problems/patching-array/description/?envType=daily-question&envId=2024-06-16

class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        miss, added, index = 1, 0, 0
        while miss <= n:
            if index < len(nums) and nums[index] <= miss:
                miss += nums[index]
                index += 1
            else:
                miss += miss
                added += 1
        return added