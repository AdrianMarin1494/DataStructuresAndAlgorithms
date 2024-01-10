// https://leetcode.com/problems/sum-of-digits-in-base-k/description/

function sumBase(n: number, k: number): number {
    let sum: number = 0;

    while (n > 0){
        sum += n%k;
        n = ~~(n/k);
    }
    
    return sum;  
};