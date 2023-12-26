// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

function differenceOfSum(nums: number[]): number {
    // Solution 1
    // create a element sum: number
    // create a digit sum: number
    // iterate over the nums array and add the values to element sum
    // on the iteration create a string out of the arraynums
    // iterate over the string, transform the values to number type and add to digit sum

    let elementSum: number = 0;
    let digitSum: number = 0;
    let numsDigits: string = "";

    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        numsDigits += String(nums[i]);
    }

    for (let i = 0; i < numsDigits.length; i++) {
        digitSum += Number(numsDigits[i]);
    }

    if (elementSum >= digitSum) {
        return elementSum - digitSum;
    } else if (elementSum < digitSum) {
        return digitSum - elementSum;
    }
}