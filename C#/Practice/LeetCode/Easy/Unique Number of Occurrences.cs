// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=daily-question&envId=2024-01-17

public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int, int> numbersFrequency = new Dictionary<int, int>();

        foreach (int num in arr)
        {
            if (!numbersFrequency.ContainsKey(num))
            {
                numbersFrequency[num] = 1;
            }
            else
            {
                numbersFrequency[num]++;
            }
        }

        bool areAllValuesUnique = numbersFrequency.Values.Distinct().Count() == numbersFrequency.Values.Count();

        return areAllValuesUnique;
    }
}