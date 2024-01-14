// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

public class Solution {
    public bool IsSumEqual(string firstWord, string secondWord, string targetWord) {
        int firstWordValue = GetNumberFromWord(firstWord);
        int secondWordValue = GetNumberFromWord(secondWord);
        int targetWordValue = GetNumberFromWord(targetWord);

        return firstWordValue + secondWordValue == targetWordValue;
    }

        private int GetNumberFromWord(string word) {
        string lettersValue = "abcdefghijklmnopqrstuvwxyz";
        string concatenatedValue = "";

        foreach (char letter in word) {
            int index = lettersValue.IndexOf(letter);
            concatenatedValue += index.ToString();
        }

        return int.Parse(concatenatedValue);
    }
}