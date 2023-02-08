const palindromes = function (str) {
    let newStr = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // **uses regex, checks for puncuation and replaces with ""
        .replace(/\s+/g, '') // replaces " " w/ ""
        .toLowerCase();

    let len = newStr.length;

    let start = '';
    let tempEnd = '';
    let end = '';

    if(len % 2 === 0) {
        start = newStr.slice(0, len / 2);

        tempEnd = newStr.slice(len / 2);
        end = tempEnd.split('').reverse().join("");

        console.log(start);
        console.log(end);

        return (start === end) ? true : false;
    } else {
        start = newStr.slice(0, Math.ceil(len / 2) - 1);

        tempEnd = newStr.slice(Math.ceil(len / 2));
        end = tempEnd.split('').reverse().join("");

        console.log(start);
        console.log(end);
   
        return (start === end) ? true : false;
    }
};

palindromes('ZZZZ car, a man, a maracaz.')
// Do not edit below this line
module.exports = palindromes;

// **https://javascript.plainenglish.io/how-to-strip-all-punctuation-from-a-string-in-javascript-using-regex-99c6857790d1