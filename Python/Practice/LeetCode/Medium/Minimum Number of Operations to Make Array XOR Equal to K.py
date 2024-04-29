# https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/description/?envType=daily-question&envId=2024-04-29

class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        final_xor = 0

        for n in nums:
            final_xor = final_xor ^ n
        count = 0
        
        while k or final_xor:
            if (k % 2) != (final_xor % 2):
                count += 1
            k //= 2
            final_xor //= 2

        return count