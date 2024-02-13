# https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/?envType=daily-question&envId=2024-02-13

class Solution:
    def check(self, s: str) -> bool:
        i, j = 0, len(s) - 1
        while i <= j:
            if s[i] == s[j]:
                i += 1
                j -= 1
            else:
                return False
        return True
    
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if self.check(word):
                return word
        return ""