// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function numberOfSteps(num: number): number {
    // Solution 1
    // Create a counter
    // Create a while loop untill the number is 0
    // Create a condition if the number is even, divide by 2, if the number is odd substract 1
    // increment the counter
    // return the counter

    let counter: number = 0;
    let theNumber: number = num;

    while (theNumber > 0) {
        if (theNumber % 2 === 0) {
            theNumber /= 2;
        } else if (theNumber % 2 === 1) {
            theNumber--;
        }
        counter++;
    }

    return counter;
};