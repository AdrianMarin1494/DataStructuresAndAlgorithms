// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=daily-question&envId=2024-01-17

function uniqueOccurrences(arr: number[]): boolean {
    const numbersFrequency: {[key: string]: number} = {};

    for (let i = 0; i < arr.length; i++) {
        if (numbersFrequency[arr[i]] === undefined) {
            numbersFrequency[arr[i]] = 1;
        } else {
            numbersFrequency[arr[i]] += 1;
        }
    }

    return Object.values(numbersFrequency).length === new Set(Object.values(numbersFrequency)).size;    
};