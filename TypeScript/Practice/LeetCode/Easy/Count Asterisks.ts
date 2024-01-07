// https://leetcode.com/problems/count-asterisks/description/

function countAsterisks(s: string): number {
    let isInsideBars: boolean = false;
    let counter: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "|") {
            isInsideBars = !isInsideBars;
        }
        if (!isInsideBars && s[i] === "*") {
            counter++;
        }
    }
    return counter;
};