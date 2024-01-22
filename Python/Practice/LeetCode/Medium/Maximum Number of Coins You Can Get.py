# https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        sum_val = 0
        counter = 0
        idx = 1

        piles.sort(reverse=True)

        while counter < len(piles) / 3:
            sum_val += piles[idx]
            idx += 2
            counter += 1

        return sum_val