// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

function minimumSum(num: number): number {
    const stringNum: string = num.toString();
    const numArray: number[] = [];

    for (let i = 0; i < stringNum.length; i++) {
        numArray.push(parseInt(stringNum[i]));
    }

    const sortedNumArray: number[] = [...numArray].sort((a: number, b: number) => a - b);
    const firstNumber: number = parseInt(sortedNumArray[0].toString() + sortedNumArray[2].toString());
    const secondNumber: number = parseInt(sortedNumArray[1].toString() + sortedNumArray[3].toString());

    return firstNumber + secondNumber;
};