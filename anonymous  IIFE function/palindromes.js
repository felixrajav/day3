//      Return all the palindromes in an array
// anonymous function

let a=["level", "racecar", "hello", "madam"];
let getPalindromes = function(arr) {
  let result = arr.filter(function(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  });
  return result;
};
console.log(getPalindromes(a));

// Output:
// [ 'level', 'racecar', 'madam' ]