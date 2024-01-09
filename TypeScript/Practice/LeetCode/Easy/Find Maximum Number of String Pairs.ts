// https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

function maximumNumberOfStringPairs(words: string[]): number {
    let pairsCounter: number = 0;

    for (let i = 0; i < words.length; i++) {
        let reversedWord = words[i].split("").reverse().join("");
        if (words.indexOf(reversedWord) > - 1 && words.indexOf(reversedWord) !== i) {
            pairsCounter++;
        }
    }
    
    return Math.floor(pairsCounter / 2);  
};