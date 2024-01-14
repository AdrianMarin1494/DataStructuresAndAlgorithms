// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=daily-question&envId=2024-01-14

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(w1, w2) {
    if(w1.length!==w2.length){return false}
    const tem1 = Array(26).fill(0)
    const tem2 = Array(26).fill(0)
    for(let i = 0; i<w1.length;i++){
        tem1[w1[i].charCodeAt(0)-97]=(tem1[w1[i].charCodeAt(0)-97] || 0) +1
        tem2[w2[i].charCodeAt(0)-97]=(tem2[w2[i].charCodeAt(0)-97] || 0) +1
    }
    for(let i=0;i<tem1.length;i++){
        if((tem1[i]>0 && tem2[i]===0)||(tem2[i]>0 && tem1[i]===0)){
            return false
        }
    }
    return tem1.sort((a,b)=>a-b).join('')===tem2.sort((a,b)=>a-b).join('')
};