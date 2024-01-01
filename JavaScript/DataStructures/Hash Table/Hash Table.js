// WHAT IS A HASH TABLE?
// Hash tables are used to store key-value pairs.
// They are like arrays, but the keys are not ordered.
// Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

// WHY SHOULD I CARE?
// Nearly every programming language has some sort of hash table data structure
// Because of their speed, hash tables are very commonly used!

// Python has Dictionaries
// JS has Objects and Maps*
// Java, Go, & Scala have Maps
// Ruby has...Hashes
// * Objects have some restrictions, but are basically hash tables

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