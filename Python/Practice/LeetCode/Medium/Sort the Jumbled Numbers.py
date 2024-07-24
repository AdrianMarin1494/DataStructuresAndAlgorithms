# https://leetcode.com/problems/sort-the-jumbled-numbers/description/?envType=daily-question&envId=2024-07-24

class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        mappedNums = {}
        for num in nums:
            if num in mappedNums: continue
            mappedNums[num] = int(''.join(str(mapping[int(d)]) for d in str(num)))

        return sorted(nums, key = mappedNums.get)