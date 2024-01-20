// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = 0;

    for (let i = 0; i < n.length; i++) {
        if (max < Number(n[i])) {
            max = Number(n[i]);
        }
    }

    return max;
};