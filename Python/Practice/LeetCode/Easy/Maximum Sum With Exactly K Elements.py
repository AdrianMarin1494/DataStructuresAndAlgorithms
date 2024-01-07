# https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        nums.sort()

        kSum = 0

        for i in range(0, k):
            kSum += i

        return nums[len(nums) - 1] * k + kSum