// Now, let's create a test file for the add function:
const add = require("./utils");

test("add function should return the sum of two numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
})

test("second test", () => {
    const result = add(5, 10);
    expect(result).toBe(15);
})

test("third", () => {
    const result = add(2, 1);
    expect(result).toBe(3);
})

// To run the tests, use the following command in your terminal:
// npx jest

// Jest will automatically discover and execute all test files with names ending in 
// .test.js or .spec.js. It will then display the test results in your terminal.

