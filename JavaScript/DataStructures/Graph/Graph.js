// WHAT ARE GRAPHS
// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph
// Graph: Nodes + Connections

// USES FOR GRAPHS
// Social Networks
// Location / Mapping
// Routing Algorithms
// Visual Hierarchy
// File System Optimizations

// ESSENTIAL GRAPH TERMS
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distanced between vertices

// TYPES OF GRAPHS
// UNDIRECTED GRAPH
// DIRECTED GRAPH
// WEIGHTED GRAPH
// UNWEIGHTED GRAPH

// HOW DO WE STORE THIS???
// ADJACENCY MATRIX
// ADJACENCY LIST

// ADJACENCY MATRIX
// -	A	B	C	D	E	F
// A	0	1	0	0	0	1
// B	1	0	1	0	0	0
// C	0	1	0	1	0	0
// D	0	0	1	0	1	0
// E	0	0	0	1	0	1
// F	1	0	0	0	1	0

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

// DIFFERENCES & BIG O
// |V| - number of vertices
// |E| - number of edges

// OPERATION	    ADJACENCY LIST	    ADJACENCY MATRIX
// Add Vertex	    O(1)	            ​O(|V^2|)
// Add Edge	    O(1)	            O(1)
// Remove Vertex	O(|V| + |E|)	    ​O(|V^2|)
// Remove Edge	    O(|E|)	            O(1)
// Query	        O(|V| + |E|)	    O(1)
// Storage	        O(|V| + |E|)	    ​O(|V^2|)