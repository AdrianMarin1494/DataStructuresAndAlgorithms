// https://leetcode.com/problems/split-a-string-in-balanced-strings/

function balancedStringSplit(s: string): number {
    let leftCounter: number = 0;
    let pairs: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            leftCounter++;
        } else if (s[i] === "R") {
            leftCounter--;
        }
        
        if (leftCounter === 0) {
            pairs++;
        }
    }
    
    return pairs;
};