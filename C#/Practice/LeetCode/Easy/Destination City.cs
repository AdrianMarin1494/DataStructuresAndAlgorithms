// https://leetcode.com/problems/destination-city/description/

public class Solution {
    public string DestCity(IList<IList<string>> paths) {
        if (paths.Count == 1) {
            return paths[0][1];
        }

        List<string> startingDestinations = new List<string>();

        for (int i = 0; i < paths.Count; i++) {
            startingDestinations.Add(paths[i][0]);
        }

        for (int i = 0; i < paths.Count; i++) {
            if (!startingDestinations.Contains(paths[i][1])) {
                return paths[i][1];
            }
        }
        return "";
    }
}