// https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */


function countingValleys(steps, path) {
    // iterate over the path
    // count values for uphill and downhill
    // if the values are equal set a boolean checking if is on the valley to false
    // if there are more downhill than uphill one after another, increment the counter for valey and set the valley boolean to true
    // Write your code here
    let valleyCounter = 0;
    let uphillCounter = 0;
    let downhillCounter = 0;
    let isOnTheValley = false;
    for (let i in path) {
        path[i] === "U" ? uphillCounter++ : downhillCounter++;
        if (uphillCounter === downhillCounter) {
            uphillCounter = 0;
            downhillCounter = 0;
            isOnTheValley = false;
            continue;
        }
        if (uphillCounter < downhillCounter && !isOnTheValley) {
            isOnTheValley = true;
            valleyCounter++;
        }
    }
    console.log(valleyCounter);
    return (valleyCounter);
}

countingValleys(12, "UDDDUDUU");





function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}