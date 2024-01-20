// https://leetcode.com/problems/sum-of-subarray-minimums/submissions/1151597404/?envType=daily-question&envId=2024-01-20

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    
    let M = 10**9+7
    const stack = [-1]
    let res = 0
    arr.push(0)
    
    for(let i2 = 0; i2 < arr.length; i2++){
        while(arr[i2] < arr[stack[stack.length -1]]){
            i = stack.pop()
            i1 = stack[stack.length-1]
            Left = i - i1
            Right = i2 -i
            res += (Left*Right*arr[i])
        };
        stack.push(i2)
    };
    
    return res%M
};