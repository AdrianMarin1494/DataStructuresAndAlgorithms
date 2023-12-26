// https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  // sort the array, for the mini exclude the last item, for the max exclude the first item
  const sortedArray = arr.sort((a, b) => a - b);
  const miniArr = [...sortedArray];
  miniArr.pop();
  const maxArr = [...sortedArray];
  maxArr.shift();
  const mini = miniArr.reduce((acumulator, crrentValue) => acumulator + crrentValue, 0);
  const max = maxArr.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
  console.log(mini, max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
