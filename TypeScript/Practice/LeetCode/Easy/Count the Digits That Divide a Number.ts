// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

function countDigits(num: number): number {
    // Solution 1
    // create a counter: number
    // create a string from num
    // loop over the string
    // transform the string slice into a number
    // check if that number is divisible by num, if it is incrmeent the counter
    
    let digitsDivisible: number = 0;
    let stringFromNum: string = num.toString();

    for (let i = 0; i < stringFromNum.length; i++) {
        if (num % parseInt(stringFromNum[i]) === 0) {
            digitsDivisible++;
        }
    }
    
    return digitsDivisible;
};