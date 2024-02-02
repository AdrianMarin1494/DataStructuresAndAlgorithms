// https://leetcode.com/problems/sequential-digits/description/?envType=daily-question&envId=2024-02-02

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];

    for (let i = 1; i <= 9; i++) {
        let num = i;

        for (let j = i + 1; j <= 9; j++) {
            num = num * 10 + j;
            console.log(num)

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }
    

    return result.sort((a, b) => a - b);
};