// In JavaScript, the prototype is a fundamental concept that enables object inheritance and behavior delegation. 
// It allows objects to inherit properties and methods from other objects, forming a chain of prototypes. 
// Understanding prototypes is crucial for working with JavaScript's object-oriented capabilities.

// // Prototypes and Prototype Chain:
// Every JavaScript object has a prototype, which is a reference to another object. 
// When you access a property or method on an object, 
// and it's not found in the object itself, JavaScript will look up the prototype chain to find it in its prototype's properties and methods. 
// This process continues until it reaches the end of the prototype chain, which is the base Object.prototype. 
// It forms a chain of inheritance that allows objects to share functionality.

// // Creating Objects with Prototypes:
// In JavaScript, objects can be created using constructor functions or classes (introduced in ECMAScript 6). 
// The prototype of an object created using a constructor function is automatically set to the constructor's prototype property. 
// For classes, the prototype is defined using the class syntax.

// Let's see examples of creating objects using constructor functions and classes:

// // Constructor Function:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype of the Person constructor
// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
// };

// // Creating objects using the Person constructor
// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

// person1.sayHello(); // Output: Hello, my name is Alice, and I'm 25 years old.
// person2.sayHello(); // Output: Hello, my name is Bob, and I'm 30 years old.

// // ES6 Class:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method added to the prototype of the Person class
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
//     }
// }

// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

// person1.sayHello(); // Output: Hello, my name is Alice, and I'm 25 years old.
// person2.sayHello(); // Output: Hello, my name is Bob, and I'm 30 years old.

// // Changing Prototype and Inheritance:
// You can modify an object's prototype to change its behavior or extend its functionality. 
// Be cautious when changing prototypes, as it can lead to unexpected results and break existing references.
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };

// const person1 = new Person("Alice");
// person1.sayHello(); // Output: Hello, my name is Alice.

// // Modifying the prototype to add a new method
// Person.prototype.sayAge = function(age) {
//     console.log(`I am ${age} years old.`);
// };

// person1.sayAge(25); // Output: I am 25 years old

// Checking Prototypes:
// You can use the Object.getPrototypeOf() method to check an object's prototype or 
// use the instanceof operator to verify if an object is an instance of a particular constructor.

// function Person(name) {
//     this.name = name;
// };

// const person1 = new Person("Alice");

// console.log(Object.getPrototypeOf(person1)  === Person.prototype); // Output: true
// console.log(person1 instanceof Person); // Output: true

// Understanding prototypes is essential for effectively using inheritance, 
// sharing functionality between objects, and implementing object-oriented patterns in JavaScript. 
// It allows you to create efficient and reusable code by organizing objects into a prototype chain.