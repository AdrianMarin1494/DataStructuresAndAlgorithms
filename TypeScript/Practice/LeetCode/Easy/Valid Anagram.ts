// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string) {
    if (s.length !== t.length) return false;

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] === undefined) {
            sMap[s[i]] = 1;
        } else {
            sMap[s[i]] += 1;
        }
        if (tMap[t[i]] === undefined) {
            tMap[t[i]] = 1;
        } else {
            tMap[t[i]] += 1;
        }
    }

    for (let j in sMap) {
        if (sMap[j] !== tMap[j]) {
            return false
        }
    }

    return true;
};