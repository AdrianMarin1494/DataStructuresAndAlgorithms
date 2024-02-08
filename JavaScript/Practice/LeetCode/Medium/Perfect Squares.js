// https://leetcode.com/problems/perfect-squares/submissions/1169963815/?envType=daily-question&envId=2024-02-08

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
    while (n % 4 == 0) {
        n /= 4;
    }
    if (n % 8 == 7) return 4;
    for (let a = 0; a * a <= n; a++) {
        let b = Math.floor(Math.sqrt(n - a * a));
        if (a * a + b * b == n) return !!a + !!b;
    }
    return 3;
};