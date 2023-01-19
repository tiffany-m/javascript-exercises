// Write a function that simply repeats the string a given number of times:

// ex
// repeatString('hey', 3) // returns 'heyheyhey'


const repeatString = function(str, num) {
    let newStr = "";

    if(num === 0 || str === "") return "";
    if(num < 0) return "ERROR";

    for(let i = 1; i <= num; i++) {
        newStr += str;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
