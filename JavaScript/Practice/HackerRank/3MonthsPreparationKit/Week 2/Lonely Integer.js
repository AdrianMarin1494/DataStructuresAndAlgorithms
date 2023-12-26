// https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */


function lonelyinteger(a) {
    // Write your code here
    // Solution 1
    // create an object where the key is the number and the value is the number of times it exists
    // check for the key which have the value 1
    // Solution 2
    // sort the list
    // iterate over the list using 2 pointers (n and n +1), increasing the n by 2 every time
    // if they are not equal, return the number
    const numbersAndFrequency = {};
    for (let i of a) {
        numbersAndFrequency[i] ? numbersAndFrequency[i] += 1 : numbersAndFrequency[i] = 1;
    }
    for (let i of Object.keys(numbersAndFrequency)) {
        if (numbersAndFrequency[i] === 1) {
            console.log(i);
            return i;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}