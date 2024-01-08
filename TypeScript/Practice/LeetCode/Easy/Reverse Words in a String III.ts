// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

function reverseWords(s: string): string {
    let words: string[] = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
};