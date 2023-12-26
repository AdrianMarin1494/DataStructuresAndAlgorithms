// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groupStrs = {};

    for (let i = 0; i < strs.length; i++) {
        let sortedStrs = strs[i].split("").sort().join("");
        if (groupStrs[sortedStrs]) {
            groupStrs[sortedStrs].push(strs[i]);
        } else {
            groupStrs[sortedStrs] = [strs[i]];
        }
    }

    return Object.values(groupStrs);
};