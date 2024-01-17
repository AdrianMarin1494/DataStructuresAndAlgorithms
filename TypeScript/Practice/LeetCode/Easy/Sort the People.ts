// https://leetcode.com/problems/sort-the-people/

function sortPeople(names: string[], heights: number[]): string[] {
    const namesAndHeights: [string, number][] = [];
    const sortedPeople: string[] = [];

    for (let i = 0; i < names.length; i++) {
        namesAndHeights.push([names[i], heights[i]]);
    }

    namesAndHeights.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < namesAndHeights.length; i++) {
        sortedPeople.push(namesAndHeights[i][0]);
    }
    
    return sortedPeople;
};