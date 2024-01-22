// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

class Solution {
    public int maxCoins(int[] piles) {
        int sum = 0;
        int counter = 0;
        int idx = piles.length - 2;

        Arrays.sort(piles);

        while (counter < piles.length / 3) {
            sum += piles[idx];
            idx -= 2;
            counter++;
        }

        return sum;
    }
}