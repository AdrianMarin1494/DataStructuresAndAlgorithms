// https://leetcode.com/problems/add-strings/description/

function addStrings(num1: string, num2: string): string {
    return String(BigInt(num1) + BigInt(num2));
};