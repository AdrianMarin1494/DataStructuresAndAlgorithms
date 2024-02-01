// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2024-02-01

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const ans=[];
    nums.sort((a, b) => a - b);
    for(let i=0;i<nums.length;i+=3){
        if(nums[i+2]-nums[i]<=k){
            ans.push([nums[i],nums[i+1],nums[i+2]]);
        }
        else{
            return []
        }
    }
    return ans;
};