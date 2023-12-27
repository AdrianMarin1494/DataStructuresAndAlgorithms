// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let candiesWithExtra: boolean[] = [];
    let maxCandies: number = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }
    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= maxCandies) {
            candiesWithExtra.push(true);
        } else {
            candiesWithExtra.push(false);
        }
    }
    return candiesWithExtra;
};