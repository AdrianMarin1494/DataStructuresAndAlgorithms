/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const sFrequency = {};
    const tFrequency = {};
    for (let i = 0; i < s.length; i++) {
        if (sFrequency[s[i]] === undefined) {
            sFrequency[s[i]] = 1;
        } else {
            sFrequency[s[i]] += 1;
        }
        if (tFrequency[t[i]] === undefined) {
            tFrequency[t[i]] = 1;
        } else {
            tFrequency[t[i]] += 1;
        }
    }
    const sortedSFrequency = Object.entries(sFrequency).sort((a, b) => a[1] - b[1]);
    const sortedTFrequency = Object.entries(tFrequency).sort((a, b) => a[1] - b[1]);
    console.log(sortedSFrequency)
    console.log(sortedTFrequency)
};

isIsomorphic("bbbaaaba", "aaabbbba")