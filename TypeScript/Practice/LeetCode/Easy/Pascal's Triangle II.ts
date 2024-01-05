// https://leetcode.com/problems/pascals-triangle-ii/description/

function getRow(rowIndex: number): number[] {
    const triangle = [[1], [1, 1]];

    for (let i = 2; i < rowIndex + 1; i++) {
        const row = Array(i + 1).fill(1);

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle[rowIndex];
}