// ADJACENCY LIST
//    [
// 0    [1,5],
// 1    [0,2],
// 2    [1,3],
// 3    [2,4],
// 4    [3,5],
// 5    [4,0]
//    ]

// ADJACENCY LIST
// {
//     A: ["B", "F"],
//     B: ["A", "C"],
//     C: ["B", "D"],
//     D: ["C", "E"],
//     E: ["D", "F"],
//     F: ["E", "A"]
// }

// OPERATION	    ADJACENCY LIST	    
// Add Vertex	    O(1)	           
// Add Edge	        O(1)	           
// Remove Vertex	O(|V| + |E|)	    
// Remove Edge	    O(|E|)	            
// Query	        O(|V| + |E|)	    
// Storage	        O(|V| + |E|)	


// Adjacency List
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge