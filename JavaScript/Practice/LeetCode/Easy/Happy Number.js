// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function isHappyRecursion(newN) {
        let stringNumber = new String(newN);
        if (stringNumber.length === 1) {
            if (newN === 1 || newN === 7) {
                return true;
            }
            if (newN !== 1) {
                console.log(false);
                return false;
            }
        }

        let sum = 0;

        for (let i = 0; i < stringNumber.length; i++) {
            sum += Number(stringNumber[i])**2;
        }
        return isHappyRecursion(sum);
    }
    return isHappyRecursion(n);
};