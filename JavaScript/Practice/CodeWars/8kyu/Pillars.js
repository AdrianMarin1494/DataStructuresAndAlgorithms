// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
    // your code here
    if (numPill === 1) {
      return 0;
    }
    else {
    return (numPill * width) + (numPill - 1) * (dist * 100) - (width * 2);
    }
  }