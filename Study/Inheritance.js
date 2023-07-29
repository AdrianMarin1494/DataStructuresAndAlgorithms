// Inheritance is a core concept in object-oriented programming, 
// and JavaScript allows you to achieve inheritance through prototypes and the prototype chain. 
// By setting up a chain of prototypes, you can create relationships between objects, allowing them to inherit properties and methods from each other. 
// In JavaScript, inheritance is achieved using constructor functions, classes (introduced in ECMAScript 6), and the prototype chain.

// Let's dive into a detailed explanation and examples of inheritance in JavaScript:

// // Constructor Function Inheritance:
// In constructor function inheritance, we create a constructor function for the base (parent) class and then use the call() method 
// to invoke the parent constructor within the child constructor. 
// By doing this, the child object inherits properties from the parent.

// // Parent constructor function
// function Animal(name) {
//     this.name = name;
// }

// // Method added to the prototype of the Animal construcotr
// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a sound.`);
// };

// // Child constructor function
// function Dog(name, breed) {
//     // Call the parent constructor to inherit properties
//     Animal.call(this, name);
//     this.breed = breed;
// }

// // Establish the inheritance chain by linking prototypes
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Method added to the prototype of the Dog constructor
// Dog.prototype.bark = function() {
//     console.log(`${this.name} barks loudly.`);
// };

// const dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy makes a sound.
// dog1.bark(); // Output: Buddy barks loudly.


// // ES6 Class Inheritance:
// With the introduction of classes in ECMAScript 6, inheritance in JavaScript became more straightforward. 
// Classes provide a cleaner syntax for setting up prototypes and inheritance.
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak () {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent constructor to inherit properties
//         this.breed = breed; 
//     }

//     bark() {
//         console.log(`${this.name} barks loudly.`);
//     }
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy makes a sound.
// dog1.bark(); // Output: Buddy barks loudly.

// // Prototype Chain and Method Overriding:
// The prototype chain allows child objects to access methods from their parent prototypes. 
// However, if the child has a method with the same name as the one in the parent, it will override the parent's method.
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a sound.`);
// }

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.construcotr = Dog;

// // Method overriding
// Dog.prototype.speak = function() {
//     console.log(`${this.name} barks loudly.`);  
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy barks loudly.

// In this example, the speak() method of the Dog class overrides the speak() method of the Animal class. 
// When dog1.speak() is called, it executes the overridden method in the Dog prototype.

// Inheritance allows you to create hierarchical relationships between objects, promoting code reusability and organization. 
// By understanding prototypes, constructor functions, and the prototype chain, you can implement inheritance effectively in JavaScript.