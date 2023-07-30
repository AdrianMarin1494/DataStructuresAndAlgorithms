// Abstraction:
// Abstraction hides the implementation details of an object, exposing only relevant features. 
// It allows us to create abstract classes or methods that provide a blueprint without specific implementation.
// In JavaScript, abstraction is often achieved through inheritance and not providing concrete implementations in the superclass:

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Shape is an abstract class and cannot be instantiated directly.');
        }
    }

    getArea() {
        // Abstract method, to be impemented in subclass
        throw new Error('The getArea() method must be implemented in subclasses.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Creating instances
const circle = new Circle(5);
console.log(circle.getArea()); // Output: 78.53981633974483

// Trying to create an instance of the abstract class (Shape)
const shape = new Shape(); // Throws an Error