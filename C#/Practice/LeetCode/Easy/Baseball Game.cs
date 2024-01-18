// https://leetcode.com/problems/baseball-game/description/

public class Solution {
    public int CalPoints(string[] operations) {
        List<int> digits = new List<int>();
        int score = 0;

        for (int i = 0; i < operations.Length; i++) {
            if (operations[i] == "+") {
                digits.Add(digits[digits.Count-1] + digits[digits.Count-2]);
            } else if (operations[i] == "D") {
                digits.Add(digits[digits.Count-1] * 2);
            } else if (operations[i] == "C") {
                digits.RemoveAt(digits.Count-1);
            } else {
                digits.Add(int.Parse(operations[i]));
            }
        }

        for (int i = 0; i < digits.Count; i++) {
            score += digits[i];
        }

        return score;
    }
}