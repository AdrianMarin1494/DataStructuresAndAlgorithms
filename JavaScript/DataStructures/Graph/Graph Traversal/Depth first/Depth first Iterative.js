// DFS-iterative(start):
//     let S be a stack
//     S.push(start)
//     while S is not empty
//         vertex = S.pop()
//         if vertex is not labeled as discovered:
//             visit vertex (add to result list)
//             label vertex as discovered
//             for each of vertex's neighbors, N do 
//                 S.push(N)

// DEPTH FIRST TRAVERSAL
// Iterative
// The function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it:
// Pop the next vertex from the stack
// If that vertex hasn't been visited yet:
// ​Mark it as visited
// Add it to the result list
// Push all of its neighbors into the stack
// Return the result array