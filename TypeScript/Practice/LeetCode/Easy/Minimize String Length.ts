// https://leetcode.com/problems/minimize-string-length/description/

function minimizedStringLength(s: string): number {
    return (new Set(s)).size;
};