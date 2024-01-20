// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

class Solution {
    public int minPartitions(String n) {
        int max = 0;

        for (int i = 0; i < n.length(); i++) {
            int digitValue = Character.getNumericValue(n.charAt(i));

            if (max < digitValue) {
                max = digitValue;
            }
        }

        return max;  
    }
}