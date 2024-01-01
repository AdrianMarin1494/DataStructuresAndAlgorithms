// https://leetcode.com/problems/assign-cookies/description/?envType=daily-question&envId=2024-01-01

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  Solution 1
var findContentChildren = function(g, s) {
    let maximumNumber = 0;
    const sortedG = g.sort((a, b) => a - b);
    const sortedS = s.sort((a, b) => a - b);

    for (let i = sortedG.length - 1; i >= 0; i--) {
        if (sortedG[i] <= sortedS[sortedS.length - 1]) {
            maximumNumber++;
            sortedS.pop();
        }
    }
    return maximumNumber;
};

// Solution 2
// var findContentChildren = function(g, s) {
//     g.sort((a, b) => a - b);
//     s.sort((a, b) => a - b);

//     let idx = 0;
//     let counter = 0;

//     while (idx < s.length && counter < g.length) {
//         if (s[idx] >= g[counter]) {
//             counter++;
//         }
//         idx++;
//     }
//     return counter;
// };