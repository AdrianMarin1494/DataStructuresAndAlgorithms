// The first in is the last out

const stack = [];

stack.push("first");
stack.push("second");
stack.push("third");

console.log(stack);
// [ 'first', 'second', 'third' ]

stack.pop();

console.log(stack);
// [ 'first', 'second' ] 

stack.pop();
stack.pop();


stack.unshift("first");
stack.unshift("second");
stack.unshift("third");

console.log(stack);
// [ 'third', 'second', 'first' ]

stack.shift();

console.log(stack);
// [ 'second', 'first' ]

// Push and pop are better