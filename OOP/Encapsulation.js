// Encapsulation:
// Encapsulation refers to the bundling of data (properties) and methods that operate on the data within a class. 
// It allows us to control access to the internal state of objects.
// In JavaScript, we can use the constructor and get / set methods to control access:

class Person {
    constructor(name, age) {
        this._name = name // Convention: Use '_' to indicate private properties
        this._age = age
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this._name}, and I am ${this._age} years old.`);
    }
}

const person = new Person("Alice", 30);
console.log(person.name); // Output: Alice
person.name = 'Alicia'; // Using the setter method to change the name
console.log(person.name); // Output: Alicia