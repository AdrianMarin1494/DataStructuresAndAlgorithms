// https://leetcode.com/problems/reordered-power-of-2/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N){
    //     get permutation and check if it is power of 2
        
    //     length of n
    //     n! * log2 N
        const normalize = (str) => {
            return str.split('').sort().join('')
        }
        const powers = new Set()
        
        const max = 10 ** 9
        
        let base = 1
        while (base <= max) {
            powers.add(normalize(base.toString()))
            base *= 2
        }
        return powers.has(normalize(N.toString()))
        
    };