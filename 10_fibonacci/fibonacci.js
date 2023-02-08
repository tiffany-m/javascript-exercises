//A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.

const fibonacci = function(a) {
    let num = Number(a);

    if (num < 0) return "OOPS"
    if (num === 1) return 1;
    
    let first = 0;
    let second = 1;
    let total = 0;

    for(let i = 1; i < num; i++) {
        total = first + second;
        first = second;
        second = total;
    }

    return total;
};

// Do not edit below this line
module.exports = fibonacci;
