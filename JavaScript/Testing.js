/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let faultyString = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "i") {
            console.log("before: ", faultyString)
            faultyString = faultyString.split("").reverse().join("");
            console.log("reverse: ", faultyString)
        } else {
            faultyString = faultyString.concat(s[i]);
        }
    }
    console.log(faultyString);
    return faultyString;
};

finalString("string");