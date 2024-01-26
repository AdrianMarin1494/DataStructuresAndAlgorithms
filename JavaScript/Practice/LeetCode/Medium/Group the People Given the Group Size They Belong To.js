// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const result = [];
    const check = {};

    for (let i = 0; i < groupSizes.length; i++) {
        let temp = groupSizes[i];
        if (check[temp]) {
            check[temp].push(i);
        } else {
            check[temp] = [i];
        }

        if (check[temp].length === temp) {
            result.push(check[temp]);
            delete check[temp];
        }
    }

    return result;
};