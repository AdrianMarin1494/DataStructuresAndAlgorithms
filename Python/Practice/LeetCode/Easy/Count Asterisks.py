# https://leetcode.com/problems/count-asterisks/description/

class Solution:
    def countAsterisks(self, s: str) -> int:
        isInsideBars = False
        counter = 0
        for i in range(len(s)):
            if (s[i] == "|"):
                isInsideBars = not isInsideBars
            if not isInsideBars and s[i] == "*":
                counter += 1
        return counter