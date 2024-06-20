# https://leetcode.com/problems/magnetic-force-between-two-balls/description/?envType=daily-question&envId=2024-06-20

class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        n=len(position)
        low=1
        high=position[-1]-position[0]
        while low<=high:
            mid=(low+high)//2
            balls_placed=1
            prev_position=position[0]
            for i in range(1,n):
                if position[i]-prev_position>=mid:
                    balls_placed+=1
                    prev_position=position[i]
            if balls_placed>=m:
                low=mid+1
                highest_force=mid
            else:
                high=mid-1
        return highest_force