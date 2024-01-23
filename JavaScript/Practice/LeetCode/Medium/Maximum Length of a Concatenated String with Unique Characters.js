// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/?envType=daily-question&envId=2024-01-23

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr){
    let max = 0;
    function recursion(index, curr){
        max = Math.max(max, curr.length);
        for (let i = index; i < arr.length; i++){
            (isUnique(curr + arr[i]) && recursion(i + 1, curr + arr[i]));
        }
    }
    recursion(0, "");
    return max;
}

var isUnique = function(str) {
  let temp = str.split("");
  if(str.length === new Set(temp).size) return true;
  else return false;  
};