// https://leetcode.com/problems/add-digits/description/

public class Solution {
    public int AddDigits(int num) {
        string numStr = num.ToString();
        char[] digits = numStr.ToCharArray();
        int sum = 0;

        while (digits.Length > 1) {
            for (int i = 0; i < digits.Length; i++) {
                sum += int.Parse(digits[i].ToString());
            }

            numStr = sum.ToString();
            digits = numStr.ToCharArray();
            sum = 0;
        }

        return int.Parse(digits[0].ToString());
    }
}