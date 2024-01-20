# https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

class Solution:
    def minPartitions(self, n: str) -> int:
        max = 0

        for i in n:
            if max < int(i):
                max = int(i)

        return max