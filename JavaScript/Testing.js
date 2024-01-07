/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    // sort the array
    // select the last item of the array
    // return the selected item or * k + k -1
    nums.sort((a, b) => a - b);
    console.log("nums: ", nums)
    let kSum = 0;
    for (let i = 0; i < k; i++) {
        kSum += i;
    }
    console.log("res: ", nums[nums.length - 1] * k + kSum)
    return nums[nums.length - 1] * k + kSum;
};

maximizeSum([1,2,3,4,5], 3);