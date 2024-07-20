# https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/?envType=daily-question&envId=2024-07-20

class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        r, c=len(rowSum), len(colSum)
        arr=[[0]*c for _ in range(r)]
        i, j=0, 0
        while i<r and j<c:
            x=min(rowSum[i], colSum[j])
            arr[i][j]=x
            rowSum[i]-=x
            colSum[j]-=x
            i+=(rowSum[i]==0)
            j+=(colSum[j]==0)
        return arr