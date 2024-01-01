/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gCopy = [...g];
    let maximumNumber = 0;
    for (let i = 0; i < s.length; i++) {
        console.log("s[i]", s[i]);
        console.log("gcopy befroe ", gCopy);
        if (gCopy.includes(s[i])) {
            gCopy.splice(gCopy.indexOf(s[i]), 1);
            console.log("splice: ", gCopy.splice(gCopy.indexOf(s[i]), 1))
            maximumNumber++;
        }
        console.log("gcopy after", gCopy);
    }
    return maximumNumber;
};

findContentChildren([10,9,8,7], [10,9,8,7]);