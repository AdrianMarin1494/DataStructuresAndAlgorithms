// https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Solution 1
    // create a counter of wrong letters
    // iterate through string s, using i + 3
    // check i, i+1 and i + 3 if are eqal with "S" "O" "S"
    // if are not equal, increase the counter
    // Write your code here
    let counter = 0;
    // for (let i = 0; i < s.length; i + 3) {
    let i = 0;
    while (i < s.length) {
        if (s[i] !== "S") {
            counter++;
        };
        if (s[i + 1] !== "O") {
            counter++;
        };
        if (s[i + 2] !== "S") {
            counter++;
        };
        i += 3;
    }
    console.log(counter);
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
