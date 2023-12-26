// https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let matches: number = 0;
    let typeToCheck: number;
    if (ruleKey === "type") {
        typeToCheck = 0;
    } else if (ruleKey === "color") {
        typeToCheck = 1;
    } else if (ruleKey === "name") {
        typeToCheck = 2;
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i][typeToCheck] === ruleValue) {
            matches++;
        }
    }

    return matches
};