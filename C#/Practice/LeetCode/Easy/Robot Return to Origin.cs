// https://leetcode.com/problems/robot-return-to-origin/description/

public class Solution {
    public bool JudgeCircle(string moves) {
        int vertical = 0;
        int horizontal = 0;

        for (int i = 0; i < moves.Length; i++) {
            if (moves[i] == 'U') {
                vertical++;
            } else if (moves[i] == 'D') {
                vertical--;
            } else if (moves[i] == 'L') {
                horizontal--;
            } else if (moves[i] == 'R') {
                horizontal++;
            }
        }

        if (vertical == 0 && horizontal == 0) {
            return true;
        } else {
            return false;
        }
    }
}