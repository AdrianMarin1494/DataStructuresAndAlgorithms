// Polymorphism:
// Polymorphism allows objects of different classes to be treated as 
// objects of a common superclass, enabling dynamic method invocation.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log('Generic animal sound');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the superclass constructor
      this.breed = breed;
    }
  
    makeSound() {
      console.log('Woof! Woof!');
    }
  }

function performAnimalSound(animal) {
    animal.makeSound();
}

const genericAnimal = new Animal("Some animal");
const dog = new Dog("Buddy", "Labrador");


performAnimalSound(genericAnimal); // Output: Generic animal sound
performAnimalSound(dog); // Output: Woof! Woof!