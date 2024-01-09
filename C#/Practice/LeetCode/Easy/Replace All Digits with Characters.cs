// https://leetcode.com/problems/replace-all-digits-with-characters/

public class Solution {
    public string ReplaceDigits(string s) {
        Dictionary<char, int> letterValues = new Dictionary<char, int>
                {
                    {'a', 0},
                    {'b', 1},
                    {'c', 2},
                    {'d', 3},
                    {'e', 4},
                    {'f', 5},
                    {'g', 6},
                    {'h', 7},
                    {'i', 8},
                    {'j', 9},
                    {'k', 10},
                    {'l', 11},
                    {'m', 12},
                    {'n', 13},
                    {'o', 14},
                    {'p', 15},
                    {'q', 16},
                    {'r', 17},
                    {'s', 18},
                    {'t', 19},
                    {'u', 20},
                    {'v', 21},
                    {'w', 22},
                    {'x', 23},
                    {'y', 24},
                    {'z', 25}
                };

                List<char> letters = new List<char>
                {
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                };

                char[] sCharacters = s.ToCharArray();

                for (int i = 1; i < sCharacters.Length; i += 2)
                {
                    sCharacters[i] = Shift(sCharacters[i - 1], sCharacters[i], letterValues, letters);
                }

                return new string(sCharacters);
            }

            static char Shift(char character, char digit, Dictionary<char, int> letterValues, List<char> letters)
            {
                int letterIndex = letterValues[character] + int.Parse(digit.ToString());
                return letters[letterIndex];
            }  
}