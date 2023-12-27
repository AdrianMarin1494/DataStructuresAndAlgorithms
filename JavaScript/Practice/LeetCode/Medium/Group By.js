// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const ans = {};
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if (!ans.hasOwnProperty(key)) {
            ans[key] = [];
        }
        
        ans[key].push(this[i]);
    }
    return ans;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */