// THE HASH PART
// To implement a hash table, we'll be using an array.
// In order to look up values by key, we need a way to convert keys into valid array indices.
// A function that performs this task is called a hash function.

// WHAT MAKES A GOOD HASH?
// Fast (i.e. constant time)
// Doesn't cluster outputs at specific indices, but distributes uniformly
// Deterministic (same input yields same output)

// What Makes for a Good Hash?
// Simple Hash Example

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % arrayLen;
    }
    return total;
  }
  // Here's a hash that works on strings only:
  // hash("pink", 10); // 0
  // hash("orangered", 10); // 7
  // hash("cyan", 10); // 3

//   REFINING OUR HASH
//   Problems with our current hash
  
//   Only hashes strings (we won't worry about this)
//   Not constant time - linear in key length
//   Could be a little more random
  
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}