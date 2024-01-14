// https://leetcode.com/problems/height-checker/description/

public class Solution {
    public int HeightChecker(int[] heights) {
        int[] sortedHeights = heights.ToArray();
        Array.Sort(sortedHeights);
        int notMatching = 0;
        
        for (int i = 0; i < heights.Length; i++) {
            if (heights[i] != sortedHeights[i]) {
                notMatching++;
            }
        }
        
        return notMatching; 
    }
}