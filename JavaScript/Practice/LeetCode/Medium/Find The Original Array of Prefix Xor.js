// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let newArr = [];

    for (let i = 0; i < pref.length; i++) {
        newArr.push(pref[i-1] ^ pref[i]);
    }

    return newArr;
};