# https://leetcode.com/problems/find-common-characters/description/?envType=daily-question&envId=2024-06-05

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        freq = Counter(words[0])

        for word in words:
            newFreq = Counter(word)
            freq = freq & newFreq

        res = []
        for c,f in freq.items():
            res+=[c]*f
        return res