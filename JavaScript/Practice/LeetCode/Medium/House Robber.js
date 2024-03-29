// https://leetcode.com/problems/house-robber/description/?envType=daily-question&envId=2024-01-21

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob = 0;
    let norob = 0;
    for (let i = 0; i < nums.length; i++) {
        let newRob = norob + nums[i];
        let newNoRob = Math.max(norob, rob);
        rob = newRob;
        norob = newNoRob;
    }
    return Math.max(rob, norob);
};