// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/?envType=daily-question&envId=2023-12-27

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let result=0;
     let last=0;
     for(let i=1;i<colors.length;i++){
         if(colors[i]==colors[last]){
             if(neededTime[i]>=neededTime[last]){
                 result+=neededTime[last];
                 last=i;
             }
             else{
                 result+=neededTime[i];
             }
         }
         else{
             last=i;
         }
     } 
     return result;
 };