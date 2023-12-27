// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

function subtractProductAndSum(n: number): number {
    const stringN: string = n.toString();
    let theProduct: number = 1;
    let theSum: number = 0;

    for (let i = 0; i < stringN.length; i++) {
        theProduct *= parseInt(stringN[i]);
        theSum += parseInt(stringN[i]);
    }
    return theProduct - theSum;
};