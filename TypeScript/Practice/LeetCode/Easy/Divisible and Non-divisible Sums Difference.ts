// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/submissions/

function differenceOfSums(n: number, m: number): number {
    let num1: number = 0;
    let num2: number = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            num2 += i;
        } else {
            num1 += i;
        }
    }
    return num1 - num2;
};