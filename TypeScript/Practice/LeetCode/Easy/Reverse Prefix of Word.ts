// https://leetcode.com/problems/reverse-prefix-of-word/description/

function reversePrefix(word: string, ch: string): string {
    const wordLetters: string[] = [];
    let reversed: boolean = false;

    for (let i = 0; i < word.length; i++) {
        wordLetters.push(word[i]);
        
        if (word[i] === ch && !reversed) {
            wordLetters.reverse();
            reversed = true;
        }
    }

    return wordLetters.join("");    
};