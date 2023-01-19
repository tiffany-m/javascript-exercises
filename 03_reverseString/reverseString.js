// Pretty simple, write a function called `reverseString` that returns its input, reversed!
// Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. 
// do the reversal and then join it back together into a string.

const reverseString = function(str) {
    let arr = str.split("");
    let newArr = arr.reverse();
    let newStr = newArr.join("");

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
