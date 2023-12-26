// https://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
    let newStr = s.trim();
    let repeatedStr = '';
    for (let i = 1; i <= 5; i++) {
        repeatedStr += `${newStr.repeat(i)}`
        if (i < 5) {
            repeatedStr += `\n`
        }
    }
    console.log(repeatedStr);
    return(repeatedStr);
}