# https://leetcode.com/problems/crawler-log-folder/description/?envType=daily-question&envId=2024-07-10

from typing import List

class Solution:
    def minOperations(self, logs: List[str]) -> int:
        stack = []
        for log in logs:
            if log == "../":
                if stack:
                    stack.pop()
            elif log == "./":
                continue
            else:  
                stack.append(log)
        return len(stack)