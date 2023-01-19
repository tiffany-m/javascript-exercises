// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

const sumAll = function (a, b) {
    let sum = 0;

    if(a < 0 || b < 0) return "ERROR";
    if(Number.isInteger(a) === false || Number.isInteger(b) === false) return "ERROR";

    if(a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
