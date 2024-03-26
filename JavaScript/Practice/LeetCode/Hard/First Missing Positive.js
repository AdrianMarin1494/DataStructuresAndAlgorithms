// https://leetcode.com/problems/first-missing-positive/description/?envType=daily-question&envId=2024-03-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minNumber = 1;
    nums.filter(num => num > 0);
    sortedNums = nums.sort((a, b) => {
        return a - b;
    })
    sortedNums.forEach((num, index) => {
        if ( num === minNumber) {
          minNumber++;
        } 
        else if (num > minNumber){
            minNumber;
        }
    });
    return minNumber;
};