// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13

public class Solution {
    public int MinSteps(string s, string t) {
        Dictionary<char, int> sLetters = new Dictionary<char, int>();
        Dictionary<char, int> tLetters = new Dictionary<char, int>();
        int stepsCounter = 0;

        int minLength = Math.Min(s.Length, t.Length);

        for (int i = 0; i < minLength; i++)
        {
            if (!sLetters.ContainsKey(s[i]))
            {
                sLetters[s[i]] = 1;
            }
            else
            {
                sLetters[s[i]] += 1;
            }

            if (!tLetters.ContainsKey(t[i]))
            {
                tLetters[t[i]] = 1;
            }
            else
            {
                tLetters[t[i]] += 1;
            }
        }

        foreach (var key in sLetters.Keys)
        {
            if (!tLetters.ContainsKey(key))
            {
                stepsCounter += sLetters[key];
            }
            else if (sLetters[key] > tLetters[key])
            {
                stepsCounter += sLetters[key] - tLetters[key];
            }
        }

        return stepsCounter;
    }
}