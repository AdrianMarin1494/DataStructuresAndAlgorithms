// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

function mostWordsFound(sentences: string[]): number {
    let wordsCounter: number = 1;
    let maxWords: number = 1;
    for (let i = 0; i < sentences.length; i++) {
        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] === " ") {
                wordsCounter++;
            }
        }
        if (wordsCounter > maxWords) {
            maxWords = wordsCounter;
        }
        wordsCounter = 1;
    }
    return maxWords;
};