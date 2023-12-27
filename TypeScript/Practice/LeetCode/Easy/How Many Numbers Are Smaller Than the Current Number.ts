// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums: number[]): number[] {
    const smallerNumbers: number[] = [];
    let numbersCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                numbersCounter++;
            }
        }
        smallerNumbers.push(numbersCounter);
        numbersCounter = 0;
    }
    return smallerNumbers;
};