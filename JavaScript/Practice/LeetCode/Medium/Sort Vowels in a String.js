// https://leetcode.com/problems/sort-vowels-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const upperVowels = ['A', 'E', 'I', 'O', 'U'];
    const lowerVowels = ['a', 'e', 'i', 'o', 'u'];
    const sUpperVowels = [];
    const sLowerVowels = [];

    for (let i = 0; i < s.length; i++) {
        if (upperVowels.includes(s[i])) {
            sUpperVowels.push(s[i]);
        }
        if (lowerVowels.includes(s[i])) {
            sLowerVowels.push(s[i]);
        }
    }

    sLowerVowels.sort();
    sUpperVowels.sort((a, b) => a.localeCompare(b));

    const sVowels = [...sUpperVowels, ...sLowerVowels]; 
    const sortingArray = s.split("");
    let counter = 0;

    for (let i = 0; i < sortingArray.length; i++) {
        if (upperVowels.includes(sortingArray[i]) || lowerVowels.includes(sortingArray[i])) {
            sortingArray[i] = sVowels[counter];
            counter++;
        }
    }

    return sortingArray.join("");
};

