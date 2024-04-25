# https://leetcode.com/problems/longest-ideal-subsequence/description/?envType=daily-question&envId=2024-04-25

class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        dp = [0]*26
        ans = 1

        for c in s:
            i = ord(c)-ord('a')
            dp[i]=1+max(dp[i],max(dp[max(0,i-k):i]+dp[i+1:k+i+1]+[0]))
            ans = max(ans,dp[i])

        return ans