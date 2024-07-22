# https://leetcode.com/problems/sort-the-people/description/?envType=daily-question&envId=2024-07-22

class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        return map(lambda x: x[0], sorted(zip(names, heights), key=lambda x: -x[1]))