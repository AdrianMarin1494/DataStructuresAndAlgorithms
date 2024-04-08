// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/?envType=daily-question&envId=2024-04-08

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let counter = 0;

    while(true) {
        if (counter === students.length) {
            break;
        }
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            counter = 0;
        } else if (students[0] !== sandwiches[0]) {
            let temp = students.shift();
            students.push(temp);
            counter++;
        }
    }
    
    return students.length;
};