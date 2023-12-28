// https://leetcode.com/problems/string-compression-ii/description/?envType=daily-question&envId=2023-12-28

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
    const memo = Array.from({ length: s.length }, () => new Uint8Array(k + 1).fill(101));
    const dfs = (i, k) => {
        if (i + k >= s.length) return 0;
        if (k < 0) return 101;
        if (memo[i][k] !== 101) return memo[i][k];
        let res = dfs(i + 1, k - 1);
        let diff = 0, same = 0, length = 0;
        for (let j = i; j < s.length && k - diff >= 0; ++j) {
            if (s[i] === s[j]) {
                ++same;
                if (same <= 2 || same === 10 || same === 100) ++length;
            } else ++diff;
            res = Math.min(res, length + dfs(j + 1, k - diff));
        }
        return (memo[i][k] = res);
    };
    return dfs(0, k);
};