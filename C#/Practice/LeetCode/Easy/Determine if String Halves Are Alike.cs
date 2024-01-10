// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

public class Solution {
    public bool HalvesAreAlike(string s) {
        List<char> firstHalf = new List<char>();
        List<char> secondHalf = new List<char>();
        char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };

        for (int i = 0; i < s.Length / 2; i++)
        {
            char firstHalfLetter = s[i];
            char secondHalfLetter = s[s.Length - i - 1];

            if (Array.Exists(vowels, v => v == firstHalfLetter))
            {
                firstHalf.Add(firstHalfLetter);
            }

            if (Array.Exists(vowels, v => v == secondHalfLetter))
            {
                secondHalf.Add(secondHalfLetter);
            }
        }

        return firstHalf.Count == secondHalf.Count;
    }

}