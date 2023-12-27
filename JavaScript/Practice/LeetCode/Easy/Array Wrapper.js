// https://leetcode.com/problems/array-wrapper/

/**
 * @param {number[]} nums
 */
 // create a class variable
 // for valueOf create a sum, iterate over the nums and add to sum
 // for toString return a string including the [ ] and values of nums
 var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let sum = 0;
    for (let i of this.nums) {
        sum += i;
    }
    return sum;
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */