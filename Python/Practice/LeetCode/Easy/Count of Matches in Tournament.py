# https://leetcode.com/problems/count-of-matches-in-tournament/description/

class Solution:
    def numberOfMatches(self, n: int) -> int:
        numberOfTeams = n
        matchesCounter = 0

        while (numberOfTeams != 1):
            matchesCounter += math.floor(numberOfTeams / 2)
            numberOfTeams = math.ceil(numberOfTeams / 2)
        
        return matchesCounter;