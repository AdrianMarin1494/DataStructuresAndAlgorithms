/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const sArray = s.split(" ");
    let truncatedString = sArray[0];
    console.log(sArray);
    for (let i = 1; i < k; i++) {
        console.log("sArray[i]: ", sArray[i]);
        truncatedString = truncatedString.concat(" " + sArray[i]);
    }
    console.log(truncatedString);
    return truncatedString;
};

truncateSentence("Hello how are you Contestant", 4);
truncateSentence("chopper is not a tanuki", 5);