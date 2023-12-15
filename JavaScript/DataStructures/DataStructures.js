// Data structures are collections of values, the relationships among them and functions or operations that can be applied to the data
// Examples: binary search trees, queues,stacks, singly linked lists, doubly linked lists, directed graphs, undirected unweighted grahps, binary heaps, hash tables
// Working with map/ location data? Use a graph
// Need an ordered list with fast inserts/ removals at the beginning and end? Use a linked list
// Web scraping nested HTML? Use a tree
// Need to write a scheduler? Use a binary heap

// Class
// Class is a blueprint for creating objects with pre-defined properties and methods
// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it

class DataStructure {
    constructor() {
        // what default properties should it have?
    }
    someInstanceMethod() {
        // what should each object created from this class be able to do?
    }
}

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'you are expelled';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

firstStudent.markLate();
secondStudent.addScore(92);
secondStudent.addScore(87);
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage());

// Class static methods
// The static keyword defines a static method for a class. 
// Static methods are called without intsantiating their class and cannot be called through a class instance
// Static methods are often used to create utility functions for an application
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(...students) {
        // maybe send an email here
        return 'enrolling students'
    }
}

// let firstStudent = new Student("Colt", "Steele");
// let secondStudent = new Student("Blue", "Steele");

// Student.enrollStudents([firstStudent, secondStudent])

// This
// inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)

// static
// a method of the class, not a specific object

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'you are expelled';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
    static enrollStudents() {
        return "Enrolling students";
    }
}

// let firstStudent = new Student("Colt", "Steele", 1);
// let secondStudent = new Student("Blue", "Steele", 2);

// firstStudent.markLate();
// secondStudent.addScore(92);
// secondStudent.addScore(87);
// console.log(secondStudent.scores);
// console.log(secondStudent.calculateAverage());
