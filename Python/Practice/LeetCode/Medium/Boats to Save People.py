# https://leetcode.com/problems/boats-to-save-people/description/?envType=daily-question&envId=2024-05-04

class Solution(object):
    def numRescueBoats(self, people, limit):
        people.sort()
        boats = 0
        left, right = 0, len(people) - 1
        while left <= right:
            if people[left] + people[right] <= limit:
                left += 1
            right -= 1
            boats += 1
        return boats
