// https://leetcode.com/problems/minimum-number-game/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    // sort nums descending
    // create arr: resArr
    // create 2 vars
    // iterate over nums untill it gets to length 0
    // pop for each var
    // push both vars into resArr
    nums.sort((a, b) => b - a);
    const resArr = [];
    let first;
    let second;
    while (nums.length > 0) {
        first = nums.pop();
        second = nums.pop();
        resArr.push(second);
        resArr.push(first);
    }
    return resArr;
};