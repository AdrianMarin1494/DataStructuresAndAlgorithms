// https://leetcode.com/problems/count-asterisks/submissions/

public class Solution {
    public int CountAsterisks(string s) {
        bool isInsideBars = false;
        int counter = 0;
        for (int i = 0; i < s.Length; i++) {
            if (s[i] == '|') {
                isInsideBars = !isInsideBars;
            }
            if (!isInsideBars && s[i] == '*') {
                counter++;
            }
        }
        return counter;   
    }
}