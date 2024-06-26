# https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/?envType=daily-question&envId=2024-05-27

class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort(reverse=True)  # Sort in descending order

        for x in range(len(nums) + 1):
            if x <= len(nums) and (x == len(nums) or nums[x] < x):
                return x if (x == 0 or nums[x - 1] >= x) else -1

        return -1