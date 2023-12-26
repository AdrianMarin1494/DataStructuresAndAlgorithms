// https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    // loop over the arr,
    // sum the diagonals
    // return the diagonals absolute difference
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][arr.length - 1 - i];
    }
    console.log(leftDiagonalSum >= rightDiagonalSum ? leftDiagonalSum - rightDiagonalSum : rightDiagonalSum - leftDiagonalSum);
    return leftDiagonalSum >= rightDiagonalSum ? leftDiagonalSum - rightDiagonalSum : rightDiagonalSum - leftDiagonalSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}