const _ = require("lodash");
const first = {name: "Tim", age: "20"};
const second = {name: "Kim", age: "20"};
const third = {name: "Kim", age: "20"};
const fourth = third;

// Comparison using JSON.stringify();
// console.log(
//     JSON.stringify(second) === JSON.stringify(third)
// )

// Comparison using lodash .isEqual();
// console.log(_.isEqual(second, third));

// Custom comparison function
// function deepCompare(obj1, obj2) {
//     if (obj1 === obj2) return true;
//     if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false;
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
//     for (const prop in obj1) {
//       if (!obj2.hasOwnProperty(prop) || !deepCompare(obj1[prop], obj2[prop])) return false;
//     }
  
//     return true;
//   }
  
//   const obj1 = { name: "John", age: 30, address: { city: "New York" } };
//   const obj2 = { name: "John", age: 30, address: { city: "New York" } };
//   const obj3 = { name: "Alice", age: 25, address: { city: "Los Angeles" } };
  
//   console.log(deepCompare(obj1, obj2)); // Output: true
//   console.log(deepCompare(obj1, obj3)); // Output: false

// The deepCompare() function compares objects and their nested properties recursively, returning true only if all properties are equal.
  
function deepCompare(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const prop in obj1) {
        if (!obj2.hasOwnProperty(prop) || !deepCompare(obj1[prop], obj2[prop])) return false;
    }
    return true
}

const obj1 = { name: "John", age: 30, address: { city: "New York" } };
const obj2 = { name: "John", age: 30, address: { city: "New York" } };
const obj3 = { name: "Alice", age: 25, address: { city: "Los Angeles" } };

console.log(deepCompare(obj1, obj2)); // Output: true
console.log(deepCompare(obj1, obj3)); // Output: false