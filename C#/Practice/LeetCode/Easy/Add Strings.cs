// https://leetcode.com/problems/add-strings/description/

public class Solution {
    public string AddStrings(string num1, string num2) {
        BigInteger bigint1 = BigInteger.Parse(num1);
        BigInteger bigint2 = BigInteger.Parse(num2);
        BigInteger result = bigint1 + bigint2;

        return result.ToString();
    }
}