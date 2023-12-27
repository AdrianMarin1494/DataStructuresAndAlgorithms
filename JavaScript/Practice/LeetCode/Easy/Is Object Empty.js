// https://leetcode.com/problems/is-object-empty/

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Solution 1
    // create a variable to count the values
    // Iterate through the array values / object keys
    // at each loop increment the counter
    // return an ternary if the counter value is 0 = true, else = false

    // let counter = 0;
    // for (let i of Object.keys(obj)) {
    //     counter++;
    // }
    // return counter === 0 ? true : false;
    
    // Solution 2
    // return the check the length of the obj

    // return Object.values(obj).length === 0 ? true : false;

    // Solution 3
    // check if it is an array or an object and return the length

    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
};