// https://leetcode.com/problems/add-digits/description/

function addDigits(num: number): number {
    let digits: string[] = new String(num).split("");
    let sum: number = 0;

    while (digits.length > 1) {
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i])
        }

        digits = new String(sum).split("");
        sum = 0;
    }

    return Number(digits[0]);
};