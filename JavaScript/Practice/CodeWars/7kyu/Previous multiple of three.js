// https://www.codewars.com/kata/61123a6f2446320021db987d

const prevMultOfThree = n => {
  
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if (n % (j * 3) === 0) {
          return n;
        }
      }
      n = Math.floor(n / 10);
    }
    return null;
}