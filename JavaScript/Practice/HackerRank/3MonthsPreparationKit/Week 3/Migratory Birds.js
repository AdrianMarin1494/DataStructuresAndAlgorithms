// https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    // Solution 1
    // create a variable mostFrequentId to keep track of the result
    // Create a hashmap having the key the item and the value the frequency of the item
    // loop thourgh arr adding the items to the hashmap
    // create a list of hashmap entries
    // loop through the list
    // create a condition to check if the actual value is greater than the last one and if it pass make the mostFrequentId equal to the key
    // if the actual value is equal to the mostFrequentId value, check if the key is lower, if it is, update mostFrequentId
    // return mostFrequentId
    const birdsIdFrequency = {};
    let chosenIndex = 0;
    for (let idIndex = 0; idIndex < arr.length; idIndex++) {
        birdsIdFrequency[arr[idIndex]] = (birdsIdFrequency[arr[idIndex]] || 0) + 1;
    }
    const idAndFrequency = Object.entries(birdsIdFrequency)

    for (let i = 1; i < idAndFrequency.length; i++) {
        if (idAndFrequency[i][1] > idAndFrequency[chosenIndex][1]) {
            chosenIndex = i;
        } else if (idAndFrequency[i][1] === idAndFrequency[chosenIndex][1]) {
            if (idAndFrequency[i][0] < idAndFrequency[chosenIndex][0]) {
                chosenIndex = i;
            }
        }
    }
    const mostFrequentId = idAndFrequency[chosenIndex][0];
    console.log(mostFrequentId);
    return mostFrequentId;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}