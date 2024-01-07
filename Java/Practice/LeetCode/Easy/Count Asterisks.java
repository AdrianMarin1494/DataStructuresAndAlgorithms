// https://leetcode.com/problems/count-asterisks/description/

class Solution {
    public int countAsterisks(String s) {
        boolean isInsideBars = false;
        int counter = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '|') {
                isInsideBars = !isInsideBars;
            }
            if (!isInsideBars && s.charAt(i) == '*') {
                counter++;
            }
        }
        return counter;   
    }
}