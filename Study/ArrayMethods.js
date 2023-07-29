const numbers = [1, 2, 3, 4, 5];
const fruits = ["banana", "apple", "orange", "grape"];
const moreNumbers = [4, 5, 6];
// // forEach():
// The forEach() method allows you to iterate through each element of the array and execute a provided function for each element.

numbers.forEach((number) => {
    console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// // map():
// The map() method creates a new array by applying a provided function to each element of the original array.
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter():
// The filter() method creates a new array containing elements from the original array that satisfy a specified condition.
const evanNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// find():
// The find() method returns the first element in the array that satisfies the provided testing function.
const firstEvanNumber = numbers.find((number) => {
    return number % 2 === 0;
});
console.log(firstEvenNumber); // Output: 2

// reduce():
// The reduce() method reduces an array to a single value by applying a function to each element of the array.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

// sort():
// The sort() method sorts the elements of an array in place and returns the sorted array.
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]

// includes():
// The includes() method checks if an array includes a specific element and returns true or false
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(6)); // Output: false

// some() and every():
// The some() method tests whether at least one element in the array satisfies the provided function, 
// while the every() method tests whether all elements satisfy the provided function.
console.log(numbers.some((number) => number > 3)); // Output: true
console.log(numbers.every((number) => number > 0)); // Output: true

// slice():
// The slice() method returns a shallow copy of a portion of an array, selected from a start index to an end index (end index is not included).
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["apple", "orange"]
// concat():
// The concat() method is used to merge two or more arrays, creating a new array with the elements of the concatenated arrays.
const allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6]

// push() and pop():
// The push() method adds one or more elements to the end of an array, and the pop() method removes the last element from an array and returns it.0
fruits.push("grape");
const removedFruit = fruits.pop();

// unshift() and shift():
// The unshift() method adds one or more elements to the beginning of an array, and the shift() method removes the first element from an array and returns it.
fruits.unshift("banana");
const removedFruitFromStart = fruits.shift();

// join():
// The join() method creates and returns a new string by concatenating all the elements in an array, separated by a specified separator.
const joinedString = fruits.join(", ");
console.log(joinedString); // Output: "banana, apple, orange"

// indexOf() and lastIndexOf():
// The indexOf() method returns the first index at which a given element can be found in an array, and lastIndexOf() returns the last index.
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(2));

// reverse():
// The reverse() method reverses the order of elements in an array in place.
numbers.reverse();