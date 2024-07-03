# https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2024-07-01

class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for i in range(len(arr)-2):
            if arr[i]%2 != 0 and arr[i+1]%2 != 0 and arr[i+2]%2 != 0:
                return True
        return False
        