// https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
  // check if it s AM or PM, if it s PM add 12
  let result;
  if (s.slice(s.length -2, s.length) === "PM" && s.slice(0, 2) < 12) {
    result = `${parseInt(s.slice(0, 2))+12}${s.slice(2, s.length-2)}`
  } else if (s.slice(s.length -2, s.length) === "AM" && s.slice(0, 2) >= 12) {
    result = `${parseInt(s.slice(0, 2))-12}${s.slice(2, s.length-2)}`
    if (parseInt(s.slice(0, 2))-12 === 0) {
      result = `00${s.slice(2, s.length-2)}`
    }
  }
  else {
    result = s.slice(0, s.length - 2);
  }
  console.log(result);
  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}