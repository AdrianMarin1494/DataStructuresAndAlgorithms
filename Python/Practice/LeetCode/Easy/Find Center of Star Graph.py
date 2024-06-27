# https://leetcode.com/problems/find-center-of-star-graph/description/?envType=daily-question&envId=2024-06-27

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        i, j = edges[0][0], edges[0][1]
        if i in edges[1]: return i
        return j