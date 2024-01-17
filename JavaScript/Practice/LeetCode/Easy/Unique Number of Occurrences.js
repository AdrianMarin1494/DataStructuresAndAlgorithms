// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=daily-question&envId=2024-01-17

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // create: object: key: the number, value: frequency of the number
    // iterate over arr, add the value on the arr and the frequency
    // check if there are duplicates on the values of the object

    const numbersFrequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (numbersFrequency[arr[i]] === undefined) {
            numbersFrequency[arr[i]] = 1;
        } else {
            numbersFrequency[arr[i]] += 1;
        }
    }

    return Object.values(numbersFrequency).length === new Set(Object.values(numbersFrequency)).size;
};