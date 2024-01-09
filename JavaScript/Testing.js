/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    // create an array from s
    // crate an object with key: letter, value: number
    // create a function which gets the char and number and returns the shifted letter
    // create a shifting function which : 
    // iterate over the array using i+2, and call the helper function for each
    // return the string version of the array

    const letterValues = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    }
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    function shift(character, digit) {
        let letterIndex = Number(letterValues[character]) + Number(digit);
        console.log("letterIndex: ", letterIndex)
        console.log("letters[letterIndex]: ", letters[letterIndex])
        return letters[letterIndex];
    }

    const sCharacters = s.split("");
    
    for (let i = 1; i < sCharacters.length; i += 2) {
        sCharacters[i] = shift(sCharacters[i-1], sCharacters[i]);
    }

    console.log(sCharacters.join(""))
    return sCharacters.join("");
};

replaceDigits("a1c1e1")