/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Solution 1
    // for (let i = 0; i < nums.length + 1; i++) {
    //     if (!nums.includes(i)) {
    //         return i;
    //     }
    // }

    // Solution 2
    const sortedNums = nums.sort((a, b) => a - b);
    console.log(sortedNums)
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i+1] - sortedNums[i] === 2) {
            console.log(sortedNums[i+1])
            return sortedNums[i+1] + 1;
        }
    }
};

missingNumber([3,0,1])