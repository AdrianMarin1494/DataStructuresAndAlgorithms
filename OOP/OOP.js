// Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. 
// It emphasizes the concept of encapsulation, inheritance, polymorphism, and abstraction to model real-world entities and 
// their interactions. JavaScript is a versatile language that supports OOP through prototype-based inheritance. 
// In this explanation, I'll cover the key OOP concepts and provide detailed examples in JavaScript.

// Classes and Objects:
// In OOP, a class is a blueprint that defines the structure and behavior of objects. 
// An object is an instance of a class, representing a specific entity with its own state and behavior.
// Let's create a simple class called Person with properties name and age, along with a method sayHello():

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

// Creating objects (instances) of the Person class
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.sayHello(); // Output: Hello, my name is Alice, and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob, and I am 25 years old.