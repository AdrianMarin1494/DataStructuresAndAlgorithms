/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let stringNumber = new String(n);
    console.log("n: ", n)
    console.log("typeof n: ",typeof  n)
    // console.log("stringNumber: ", stringNumber)
    if (stringNumber.length === 1) {
        if (n === 1) {
            console.log("true")
            return true;
        }
        if (n !== 1) {
            return false;
        }
    }

    let sum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        sum += Number(stringNumber[i])**2;
    }

    console.log("sum: ", sum);
    isHappy(sum);
};

isHappy(19);