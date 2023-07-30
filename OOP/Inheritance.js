// Inheritance:
// Inheritance allows a class (called a subclass or derived class) to inherit properties and methods from another class 
// (called a superclass or base class). It promotes code reusability.

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the superclass constructory
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy", "Labrador");
console.log(dog.name); // Output: Buddy
dog.makeSound(); // Output: Woof! Woof!