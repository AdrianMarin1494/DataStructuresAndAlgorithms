// First In First Out

const queue = [];

queue.push("first");
queue.push("second");
queue.push("third");

console.log(queue);
// [ 'first', 'second', 'third' ]

queue.shift();

console.log(queue);
// [ 'second', 'third' ]

queue.shift();
queue.shift();


queue.unshift("first");
queue.unshift("second");
queue.unshift("third");

console.log(queue);
// [ 'third', 'second', 'first' ]

queue.pop();

console.log(queue);
// [ 'third', 'second' ]