// https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const pozitiveNumbers = [];
    const negativeNumbers = [];
    const zeroNumbers = [];
    const arrLength = arr.length;
    
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            pozitiveNumbers.push(arr[i]);
        } else if (arr[i] < 0) {
            negativeNumbers.push(arr[i]);
        } else {
            zeroNumbers.push(arr[i]);
        }
    }
    
    function calcAverage(numsArr) {
        return (numsArr.length / arrLength).toFixed(6);
    }
    
    console.log(`${calcAverage(pozitiveNumbers)}\n${calcAverage(negativeNumbers)}\n${calcAverage(zeroNumbers)}`)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

plusMinus([0, 0, -1, 1, 1]);