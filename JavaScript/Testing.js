/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let counter = 1;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            result.push(nums[i]);
            continue;
        }
        if (counter > nums[i] && (counter < nums[i+1] || nums[i+1] === undefined)) {
            result.push(nums[i]);
        }
        console.log(counter)
        counter++;
    }

    console.log(result)
    return result;
};

findErrorNums([1,2,2,4])