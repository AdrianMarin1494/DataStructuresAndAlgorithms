// https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Solution 1
    // create a constant having the number of letters in english alphabet
    // create an array to insert the values
    // loop through the string s
    // create an condition, if the value is not already in the array and is not a space, push it to the end
    // at the end of the loop check if the length of the array is equal with the number of letters constant
    // if it s equal return "pangram", if it s not, return "not pangram"
    // Write your code here

    const englishAlphabetLetters = 26;
    const uniqueLettersFromStringInput = [];

    for (let i of s) {
        if (!uniqueLettersFromStringInput.includes(i.toLowerCase()) && i !== " ") {
            uniqueLettersFromStringInput.push(i.toLowerCase());
        }
    }
    console.log(uniqueLettersFromStringInput.length === englishAlphabetLetters ? "pangram" : "not pangram");
    return uniqueLettersFromStringInput.length === englishAlphabetLetters ? "pangram" : "not pangram";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
