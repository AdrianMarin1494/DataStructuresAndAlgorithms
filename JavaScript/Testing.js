/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const convertedArray = [[]];
    
    for (let i = 0; i < nums.length; i++) {
        let arrayIdx = 0;
        while (arrayIdx <= nums.length) {
            if (convertedArray[arrayIdx] === undefined) {
                convertedArray[arrayIdx] = [];
            }
            if (!convertedArray[arrayIdx].includes(nums[i])) {
                convertedArray[arrayIdx].push(nums[i])
                break;
            }
            arrayIdx++;
        }
    }
    console.log(convertedArray)
};
// If it doesen t exist in the first array push it there,
// If it exist in the first array, push in the second and so on
findMatrix([1,3,4,1,2,3,1]);