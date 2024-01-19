// https://leetcode.com/problems/day-of-the-week/description/

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(`${month},${day},${year}`);
    const dayIndex = date.getDay();
    return days[dayIndex];
};