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

// Hash tables are collections of key-value pairs
// Hash tables can find values quickly given a key
// Hash tables can add new key-values quickly
// Hash tables store data in a large array, and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
// When in doubt, use a hash table!

class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      let valuesArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
}
  
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
console.log(ht.get(key));
})