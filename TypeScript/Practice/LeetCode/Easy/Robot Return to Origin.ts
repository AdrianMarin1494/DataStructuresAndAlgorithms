// https://leetcode.com/problems/robot-return-to-origin/description/

function judgeCircle(moves: string): boolean {
    let vertical: number = 0;
    let horizontal: number = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            vertical++;
        } else if (moves[i] === 'D') {
            vertical--;
        } else if (moves[i] === 'L') {
            horizontal--;
        } else if (moves[i] === 'R') {
            horizontal++;
        }
    }

    if (vertical === 0 && horizontal === 0) {
        return true;
    } else {
        return false;
    }    
};