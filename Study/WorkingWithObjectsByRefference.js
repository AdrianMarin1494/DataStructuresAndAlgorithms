// In JavaScript, objects are reference types, which means when you assign an object to a variable or pass it as an argument to a function, 
// you are actually working with a reference to that object in memory, not a direct copy of the object's data. 
// This has some important implications, and understanding how objects work by reference is crucial to avoid unexpected behaviors in your code.

// // Assigning Objects:
// When you assign an object to a variable, you are storing a reference to that object in the variable. 
//  Any changes made to the object through that variable will directly affect the original object.
// const originalObj = {name: "John", age: 30};
// const referenceObj = originalObj;

// referenceObj.age = 31;
// console.log(originalObj.age) // Output: 31
// In this example, originalObj and referenceObj both point to the same object in memory. 
// So, when we modify referenceObj.age, the originalObj.age is also updated.

// // Function Parameters:
// When you pass an object as a function parameter, you are passing its reference to the function. 
// Any modifications made to the object within the function will impact the original object.
// function updateAge(person) {
//     person.age = person.age + 1;
// }

// const personObj = {name: "Jim", age: 25};
// updateAge(personObj);

// console.log(personObj.age); // Output: 26

// // Creating Copies of Objects:
// To create a copy of an object that is not linked by reference, you need to perform a shallow or deep copy, depending on your requirements.
// Shallow Copy:
// A shallow copy creates a new object, but its properties still point to the same references as the original object. 
// Changes to nested objects will affect both the original and copied objects.

// const originalObj = {name: "John", address: {city: "New York"}};

// // Shallow copy using Object.assing();
// const shallowCopy = Object.assing({}, originalObj);

// shallowCopy.name = "Peter";
// shallowCopy.address.city = "Los Angeles";

// console.log(originalObj.name); // Output: "John"
// console.log(originalObj.address.city); // Output: "Los Angeles"

// As you can see, changing the name property only affects the shallowCopy, 
// but modifying the nested address.city property impacts both the original object and the shallow copy. 
// This is because the address property of the shallow copy still points to the same reference as the original object.

// // Deep Copy:
// A deep copy creates a new object with all nested objects and their properties copied recursively, resulting in completely independent objects.
const originalObj = { name: "John", address: {city: "New York"} };

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObj));

deepCopy.name = "Peter";
deepCopy.address.city = "Los Angeles";

console.log(originalObj.name); // Output: "John";
console.log(originalObj.address.city) // Output: "New York";

// In this example, the deep copy creates a completely independent copy of the original object, 
// and changes to the deep copy do not affect the original object or its nested properties.
// Working with objects by reference in JavaScript is a fundamental aspect of the language. 
// Understanding how references work and creating appropriate copies when needed will help you write more reliable and bug-free code.