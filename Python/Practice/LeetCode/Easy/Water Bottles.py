# https://leetcode.com/problems/water-bottles/description/?envType=daily-question&envId=2024-07-07

class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        return numBottles + (numBottles-1)//(numExchange-1)