// https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // s = array of integers
    // d = days (the sum of the integers form array)
    // m = months (the length of the array)
    // Solution 1
    // create a sum, a numbers counter and a passed results counter
    // create a loop
    // start the loop with the sum equal with the current number and the counter equal to 1
    // check if m is equal with m and s[i] is equal with the summ
    // create a inner loop
    // make a condition to check if the counter is greater than m or the sum is greater than d, if it is, reset the sum to s[i]
    // add the current s[j] to the sum and increase the counter
    // if the sum is equal to d and the counter is equal with m increase the results counter
    let sum = 0;
    let numbersCounter = 0;
    let passedResults = 0;
    for (let i = 0; i < s.length; i++) {
        sum = s[i];
        numbersCounter = 1;
        if (sum === d && numbersCounter === m) {
            passedResults++;
        }
        for (let j = i + 1; j < s.length; j++) {
            // if the number of numbers is higher than m, reset the sum
            if (numbersCounter > m || sum > d) {
                sum = s[i];
            }
            sum += s[j];
            numbersCounter++;
            if (sum === d && numbersCounter === m) {
                passedResults++;
            }
        }
    }
    console.log(passedResults);
    return passedResults;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}