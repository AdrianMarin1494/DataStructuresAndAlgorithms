/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function isHappyRecursion(newN) {
        let stringNumber = new String(newN);
        console.log("n: ", newN)
        if (stringNumber.length === 1) {
            if (newN === 1 || newN === 7) {
                console.log("true")
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

        console.log("sum: ", sum);
        return isHappyRecursion(sum);
    }
    return isHappyRecursion(n);
};

isHappy(19);