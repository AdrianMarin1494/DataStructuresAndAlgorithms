// https://leetcode.com/problems/shuffle-string/

function restoreString(s: string, indices: number[]): string {
    // Solution 1
    // create an string array of the string s length
    // iterate over the string s
    // push the iteration of the string into array on the index of inddices

    const shuffledArray: string[] = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        shuffledArray[indices[i]] = s[i];
    }

    const shuffledString: string = shuffledArray.join("");
    return shuffledString;
};