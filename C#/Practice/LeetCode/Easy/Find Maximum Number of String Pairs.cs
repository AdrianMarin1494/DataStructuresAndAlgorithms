// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

public class Solution {
    public int MaximumNumberOfStringPairs(string[] words) {
        int pairsCounter = 0;

        for (int i = 0; i < words.Length; i++) {
            string reversedWord = new string(words[i].ToCharArray().Reverse().ToArray());
            int idx = Array.IndexOf(words, reversedWord);
            if (idx > - 1 && idx != i) {
                pairsCounter++;
            }
        }
        
        return pairsCounter / 2; 
    }
}