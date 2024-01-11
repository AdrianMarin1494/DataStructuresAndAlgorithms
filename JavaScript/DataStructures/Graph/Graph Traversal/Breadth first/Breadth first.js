// Visit neighbors at current depth first!

// BREADTH FIRST
// This function should accept a starting vertex
// Create a queue (you can use an array) and place the starting vertex in it
// Create an array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting.
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes