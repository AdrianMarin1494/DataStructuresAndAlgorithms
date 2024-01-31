// https://leetcode.com/problems/daily-temperatures/description/?envType=daily-question&envId=2024-01-31

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // add arr days: store days
    // add int daysWaiting: store the number of days untill the next higher temperature
    // add boolean addedTemperature: it checks if there is a new temperature added
    // add loop for termperatures to check each one
    // add if: check if temperatures[i] is the same as temperatures[i-1], if it is
    // add if to check if days[i-1] is 0, if it is push 0, else add the same day - 1, continue
    // add inner loop for temperatures to check when is a higher one
    // in the inner loop increment daysWaiting
    // add if if the current temperature from inner loop is higher push daysWating, changed addedTemperature to true and break from inner loop
    // add if: on the outer loop check if addedTemperature is false, if it is, push 0 to days
    // after the inner loop reset daysWaiting to 0
    // after the inner loop reset addedTempearature to false
    // return days

    const days = [];
    let daysWaiting = 0;
    let addedTemperature = false;

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] === temperatures[i-1]) {
            if (days[i-1] === 0) {
                days.push(0);
            } else {
                days.push(days[i-1] - 1);
            }
            continue;
        }

        for (let j = i + 1; j < temperatures.length; j++) {
            daysWaiting++;
            if (temperatures[j] > temperatures[i]) {
                days.push(daysWaiting);
                addedTemperature = true;
                break;
            }
        }

        if (!addedTemperature) {
            days.push(0);
        }

        daysWaiting = 0;
        addedTemperature = false;
    }

    return days;
};