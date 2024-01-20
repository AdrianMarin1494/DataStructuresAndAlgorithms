// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

public class Solution {
    public int MinPartitions(string n) {
        int max = 0;

        for (int i = 0; i < n.Length; i++) {
            int digitValue = (int)Char.GetNumericValue(n[i]);
            
            if (digitValue > max) {
                max = digitValue;
            }
        }

        return max;
    }
}