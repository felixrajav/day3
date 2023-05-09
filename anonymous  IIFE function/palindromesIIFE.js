//      Return all the palindromes in an array
// IIFE function

let result = (function(arr) {
  return arr.filter(function(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  });
})(["level", "racecar", "hello", "madam"]);

console.log(result);
// Output:
// [ 'level', 'racecar', 'madam' ]
  
    