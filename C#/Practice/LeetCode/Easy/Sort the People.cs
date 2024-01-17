// https://leetcode.com/problems/sort-the-people/

public class Solution {
    public string[] SortPeople(string[] names, int[] heights) {
        List<Tuple<string, int>> namesAndHeights = new List<Tuple<string, int>>();
        List<string> sortedPeople = new List<string>();

        for (int i = 0; i < names.Length; i++)
        {
            namesAndHeights.Add(Tuple.Create(names[i], heights[i]));
        }

        namesAndHeights = namesAndHeights.OrderByDescending(t => t.Item2).ToList();

        for (int i = 0; i < namesAndHeights.Count; i++)
        {
            sortedPeople.Add(namesAndHeights[i].Item1);
        }

        return sortedPeople.ToArray();
    }
}