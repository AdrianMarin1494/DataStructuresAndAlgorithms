/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const result = s.split("")
    if (s.length < k) {
        return result.reverse().join("");
    }
    else if (s.length < 2 * k) {
        for (let i = 0; i < k / 2; i++) {
            let temp = result[i]; 
            result[i] = result[k-i-1];
            result[k-i-1] = temp;
        }
        return result.join("");
    }
    else {
        for (let i = 0; i < s.length; i += 2 * k) {
            console.log(i)
            let temp = result[i]; 
            result[i] = result[i+1];
            result[i+1] = temp;
            console.log(result)
        }
        return result.join("");
    }
};


reverseStr("abcdefg", 2);