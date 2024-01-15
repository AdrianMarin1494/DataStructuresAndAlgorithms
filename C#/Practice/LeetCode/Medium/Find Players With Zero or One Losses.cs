// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/?envType=daily-question&envId=2024-01-15

public class Solution {
    public IList<IList<int>> FindWinners(int[][] matches) {
        List<int> playersOne = new List<int>();
        List<int> playersZero = new List<int>();
        Dictionary<int, int> playersLoses = new Dictionary<int, int>();

        foreach (var match in matches)
        {
            if (!playersLoses.ContainsKey(match[1]))
            {
                playersLoses[match[1]] = 1;
            }
            else
            {
                playersLoses[match[1]] += 1;
            }
        }

        foreach (var player in playersLoses.Keys)
        {
            if (playersLoses[player] == 1)
            {
                playersOne.Add(player);
            }
        }

        foreach (var match in matches)
        {
            if (!playersLoses.ContainsKey(match[0]) && !playersZero.Contains(match[0]))
            {
                playersZero.Add(match[0]);
            }
        }

        playersOne.Sort();
        playersZero.Sort();

        return new int[][] { playersZero.ToArray(), playersOne.ToArray() };   
    }
}