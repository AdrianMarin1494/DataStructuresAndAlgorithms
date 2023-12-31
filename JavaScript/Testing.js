/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const charactersFrequency = {};
    let maxLength = -1;
 
    for (let character of s) {
        if (charactersFrequency[character] === undefined) {
            charactersFrequency[character] = 1;
        } else {
            charactersFrequency[character] += 1;
        }
    }
    console.log(charactersFrequency);
    for (let i in charactersFrequency) {
        if (charactersFrequency[i] > 1) {
            console.log("char: ", i);
            console.log("first index: ", s.indexOf(i))
            console.log("last index: ", s.lastIndexOf(i))
            if (s.lastIndexOf(i) - s.indexOf(i) - 1 > maxLength) {
                maxLength = s.lastIndexOf(i) - s.indexOf(i) - 1;
            }
        }
    }
    console.log(maxLength);
    return maxLength;
 };

 maxLengthBetweenEqualCharacters("aydsicwrfybunpqsdsnenvrfirr")