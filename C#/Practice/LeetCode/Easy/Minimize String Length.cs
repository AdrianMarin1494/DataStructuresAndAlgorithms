// https://leetcode.com/problems/minimize-string-length/description/

public class Solution {
    public int MinimizedStringLength(string s) {
        HashSet<char> uniqueValues = new HashSet<char>(s);
        for (int i = 0; i < s.Length; i++) {
            uniqueValues.Add(s[i]);
        }
        return uniqueValues.Count;
    }
}