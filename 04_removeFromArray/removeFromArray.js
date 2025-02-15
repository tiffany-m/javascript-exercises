// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

//     - how to remove a single element from an array
//     - how to deal with multiple optional arguments in a javascript function
//     -[Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  
//     Scroll down to the bit about `Array.from` or the spread operator. 
//     - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

// ORIGINAL TRY WORKED FOR 2 ARGS ----------------------
// const removeFromArray = function(arr, arg) {
//     let len = arr.length;
//     let newArr = [];

//     for(let i = 0; i < len; i++) {
//         if(arr[i] != arg) {
//             newArr.push(arr[i]);
//         } else {
//             continue;
//         }
//     }
//     return newArr;
// }; 
// -----------------------------------------------------
// forEach() method calls a function for each element in an array.

// Example
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(item => sum += item)
// -----------------------------------------------------


const removeFromArray = function (...args) {
    const array = args[0];
    const newArr = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
