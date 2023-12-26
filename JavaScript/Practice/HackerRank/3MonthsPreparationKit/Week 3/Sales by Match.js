// https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Solution 1
    // create a sum
    // create a hashmap where the key is the item and the vale is the number of times it appers
    // create a loop thourgh ar
    // create a condition, if the item is not already a key, start it at 1, if it is, increase the value by 1
    // create a loop through the hashmap values
    // divide the value by 2, Math.flor it and add it to the sum
    // return the sum
    // Write your code here

    // Solution 2
    // sort the ar
    // loop through the sorted array
    // keep track of the value and if it apeers 2 times increase the counter
    // if the value change reset the counter
    let sum = 0;
    const numbersFrequency = {};
    for (let i = 0; i < ar.length; i++) {
        numbersFrequency.hasOwnProperty([ar[i]]) ? numbersFrequency[ar[i]] += 1 : numbersFrequency[ar[i]] = 1;
    }
    for (let j of Object.values(numbersFrequency)) {
        sum += Math.floor(j / 2);
    }
    console.log(sum);
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}