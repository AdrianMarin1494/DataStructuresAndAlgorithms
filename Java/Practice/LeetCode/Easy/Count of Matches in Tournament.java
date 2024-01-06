// https://leetcode.com/problems/count-of-matches-in-tournament/description/

class Solution {
    public int numberOfMatches(int n) {
        int numberOfTeams = n;
        int matchesCounter = 0;

        while (numberOfTeams != 1) {
            matchesCounter += Math.floor(numberOfTeams / 2);
            numberOfTeams = (int) Math.ceil((double) numberOfTeams / 2);
        }
        
        return matchesCounter;
    }
}