// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
    if (queue[queue.length-1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    }
    else {
      let count = queue.length
      for (let i of queue) {
        count--
        if (i === "wolf") {
          return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`;
        }
          
      }
    }
  }