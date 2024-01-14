/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const firstWordValue = getNumberFromWord(firstWord);
    const secondWordValue = getNumberFromWord(secondWord);
    const targetWordValue = getNumberFromWord(targetWord);

    return firstWordValue + secondWordValue === targetWordValue;

    function getNumberFromWord(word) {
        const lettersValue = {
            a: "0",
            b: "1",
            c: "2",
            d: "3",
            e: "4",
            f: "5",
            g: "6",
            h: "7",
            i: "8",
            j: "9",
            k: "10",
            l: "11",
            m: "12",
            n: "13",
            o: "14",
            p: "15",
            q: "16",
            r: "17",
            s: "18",
            t: "19",
            u: "20",
            v: "21",
            w: "22",
            x: "23",
            y: "24",
            z: "25"
        };
        let concatenatedValue = "";
        
        for (let i = 0; i < word.length; i++) {
            console.log("letter: ", lettersValue[word[i]]);
            concatenatedValue += lettersValue[word[i]];
        }
        console.log("value: ", concatenatedValue)
        
        return Number(concatenatedValue);
    }
};

isSumEqual("acb", "cba", "cdb");