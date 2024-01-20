// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

function minPartitions(n: string): number {
    let max: number = 0;

    for (let i = 0; i < n.length; i++) {
        if (max < Number(n[i])) {
            max = Number(n[i]);
        }
    }

    return max; 
};