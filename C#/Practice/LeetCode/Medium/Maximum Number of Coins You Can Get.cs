// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/

public class Solution {
    public int MaxCoins(int[] piles) {
        int sum = 0;
        int counter = 0;
        int idx = 1;

        Array.Sort(piles, (a, b) => b - a);

        while (counter < piles.Length / 3)
        {
            sum += piles[idx];
            idx += 2;
            counter++;
        }

        return sum;
    }
}