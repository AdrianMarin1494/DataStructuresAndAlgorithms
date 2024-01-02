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