// Builds up the sort by gradually creating a larger left half which is always sorted

// [1, 2, 9, 76, 0]
// we compare 0 with 76, 0 is smaller, we copy 76 in the place of 0
// [1, 2, 9, 76, 76]
// we compare 0 with 9, 0 is smaller, we copy 9 in the place of 76
// [1, 2, 9, 9, 76]
// we compare 0 with 2, 0 is smaller, we copy 2 in the place of 9
// [1, 2, 2, 9, 76]
// we compare 0 with 1, 0 is smaller, we copy 1 in the place of 2
// [0, 1, 2, 9, 76]