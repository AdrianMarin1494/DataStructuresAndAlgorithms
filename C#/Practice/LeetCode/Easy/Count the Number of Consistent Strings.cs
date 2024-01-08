// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

public class Solution {
    public int CountConsistentStrings(string allowed, string[] words) {
        int consistentStringsCounter = 0;
        for (int i = 0; i < words.Length; i++) {
            for (int j = 0; j < words[i].Length; j++) {
                if (!allowed.Contains(words[i][j])) {
                    break;
                }
                if (j == words[i].Length - 1) {
                    consistentStringsCounter++;
                }
            }
        }
        return consistentStringsCounter;        
    }
}