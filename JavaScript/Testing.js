/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) {
        return 1;
    }
    const trustPerPerson = {};
      
    for (let i = 0; i < trust.length; i++) {
        trustPerPerson[trust[i][1]] === undefined ? trustPerPerson[trust[i][1]] = 1 : trustPerPerson[trust[i][1]] += 1;
    }

    console.log(trustPerPerson)

    for (let i in trustPerPerson) {
        if (trustPerPerson[i] === n - 1) {
            for (let j = 0; j < trust.length; j++) {
                console.log('trustingPerson: ', trust[j][0])
                console.log('turstPerPerson[i]: ', i)
                if (trust[j][0] === Number(i)) {
                    console.log(-1)
                    return -1;
                }
            }
            console.log(i);
            return i;
        }
    }

    console.log(-1);
    return -1;
  };


  findJudge(3, [[1,3],[2,3],[3,1]])