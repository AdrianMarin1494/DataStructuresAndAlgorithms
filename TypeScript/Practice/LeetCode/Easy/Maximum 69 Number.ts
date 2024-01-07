// https://leetcode.com/problems/maximum-69-number/description/

function maximum69Number (num: number): number {
    const digits: string[] = [...num.toString()];

    for (let i = 0; i < digits.length; i++) {
        console.log("digits[i]: ", digits[i])
        if (digits[i] === "6") {
            console.log("on if: ", digits[i])
            digits[i] = "9";
            break;
        }
    }

    let result: number = Number(digits.join(""));
    return result;
};