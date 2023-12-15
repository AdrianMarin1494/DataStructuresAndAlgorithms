// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individualy

// Example
// Long string: "wowomgzomg"
// search short string: "omg"
// walking one character at a time
// check first character "w", it is not a match
// w owomgzomg
// o mg
// check the second character "o", it is equal with the first letter
// w o womgzomg
//   o mg
// we keep o and add the next character, checks "ow"
// w ow omgzomg
//   om g
// "ow" doesen't match the short string, we thorw them
// check the next character, "w" doesen't match
// wo w omgzomg
//    o mg
// next character "o", it is equal with the first letter
// wow o mgzomg
//     o mg
// "om" are in the substring, are equal with the first 2 characters
// wow om gzomg
//     om g
// "omg" is equal to the substring, we found the match
// wow omg zomg
//     omg
// we move to the next character, "m", is not a match
// wowo m gzomg
//      o mg
// we move to the next character, "g", is not a match
// wowom g zomg
//       o mg
// we move to the next character, "z", is not a match
// wowomg z omg
//        o mg
// we move to the next character, "o", is a match
// wowomgz o mg
//         o mg
// we keep the character, "om" is a match
// wowomgz om g
//         om g
// we keep the characters, "omg" is a match
// wowomgz omg
//         omg
// Naive string search done

// Pseudocode
// define a function that takes 2 strings
// a large string and a pattern
// loop over the longer string
// loop over the shorter string
// if the characters don't match break out of the inner loop

function naiveSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                break;
            }

            if (j === short.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(naiveSearch("aabc abcc", "abc"));