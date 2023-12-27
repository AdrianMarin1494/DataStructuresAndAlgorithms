// Is Subsequence Solution - Iterative
function isSubsequenceIterative(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) {
        return true;
    }
    while (j < str2.length) {
        if (str2[j] === str[i]) {
            i++;
        };
        if (i === str1.length) {
            return true;
        };
        j++;
    };
    return false;
}

// Recursive but not O(1) Space
function isSubsequenceRecursive(str1, str2) {
    if (str1.length === 0) {
        return true;
    }
    if (str2.length === 0) {
        return false;
    };
    if (str2[0] === str1[0]) {
        return isSubsequence(str1.slice(1), str2.slice(1));
    };
    return isSubsequence(str1, str2.slice(1))
}