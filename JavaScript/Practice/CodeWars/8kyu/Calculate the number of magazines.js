// https://www.codewars.com/kata/5ab52526379d20736b00000e

function magNumber(info){
    let bullets = 0;
    let magazines = 0;
    
  //   Change the number of bullets depending on the weapon
    if (info[0] === 'PT92') {
      bullets = 17;
    } else if(info[0] === 'M4A1' || info[0] === `M16A2`) {
      bullets = 30;
    } else if (info[0] === 'PSG1') {
      bullets = 5;
    } else {
      return 'Wrong weapon';
    }
    if (parseInt(info[1]) * 3 % bullets != 0) {
      magazines +=1
    }
    magazines += Math.floor(parseInt(info[1]) * 3 / bullets);
    if (!magazines) {
      magazines++;
    }
    return magazines
  }