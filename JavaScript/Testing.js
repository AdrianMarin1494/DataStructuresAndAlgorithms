// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1);
        } else {
            counter++;
        }
    }
    console.log(nums);
    return counter;
};

console.log(removeDuplicates([1, 1, 2]))