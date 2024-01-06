// https://leetcode.com/problems/count-of-matches-in-tournament/description/

public class Solution {
    public int NumberOfMatches(int n) {
        int numberOfTeams = n;
        int matchesCounter = 0;

        while (numberOfTeams != 1) {
            matchesCounter += (int)Math.Floor((double)numberOfTeams / 2);
            numberOfTeams = (int)Math.Ceiling((double)numberOfTeams / 2);
        }
        
        return matchesCounter;
    }
}