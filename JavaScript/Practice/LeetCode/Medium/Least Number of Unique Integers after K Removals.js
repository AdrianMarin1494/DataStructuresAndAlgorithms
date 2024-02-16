// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/?envType=daily-question&envId=2024-02-16

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const numberFrequency = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (numberFrequency[arr[i]] === undefined) {
            numberFrequency[arr[i]] = 1;
        } else {
            numberFrequency[arr[i]] += 1;
        }
    }

    const res = (Object.entries(numberFrequency).sort((a, b) => b[1] - a[1]))

    for (let i = 1; i <= k; i++) {
        if (res[res.length-1][1] === 1) {
            res.pop();
        } else {
            res[res.length-1][1] -= 1;
        }
    }

    return res.length;
};