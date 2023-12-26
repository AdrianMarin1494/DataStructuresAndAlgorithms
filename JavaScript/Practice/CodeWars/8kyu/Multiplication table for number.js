// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let text = ''
    for (let i = 1; i < 10; i++) {
      text += `${i} * ${number} = ${i * number}\n`
    }
    text += `${10} * ${number} = ${10 * number}`
    return text;
  }