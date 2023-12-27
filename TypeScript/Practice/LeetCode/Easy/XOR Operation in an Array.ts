// https://leetcode.com/problems/xor-operation-in-an-array/

function xorOperation(n: number, start: number): number {
    let counter: number = 0;

    for (let i = 0; i < n; i++) {
        counter ^= start + 2 * i;
    }

    return counter;
};