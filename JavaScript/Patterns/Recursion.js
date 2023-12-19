// Recursion is a process (a function in our case) that calls itself
// Invoke the same function with a different input until you reach your base case
// Base case, the condition when the recursion ends 

// Where the things go wrong
// No base case, no end of function
// Forgetting to return or returning the wrong thing
// Stack overflow

// Helper method recursion
// we have the main outer function and inside we have the recursive faction which call itself

// Pure recursion tips
// For arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them
// Remember that string are  immutable so you will need to use method like slice, substr or substring to make copies of strings