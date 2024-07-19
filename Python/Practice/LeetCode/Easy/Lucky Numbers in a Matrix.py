# https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/?envType=daily-question&envId=2024-07-19

class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        res = []
        maxCol = []
        m = len(matrix)
        n = len(matrix[0])
        
        for c in range(n):
            maxCol.append(max(matrix[r][c] for r in range(m)))
        
        for row in matrix:
            row.sort()
            if row[0] in maxCol:
                res.append(row[0])
        
        return res