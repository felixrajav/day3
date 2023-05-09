//      Return all the palindromes in an array

let getPalindromes = (arr)=> {
    let result = arr.filter(function(str) {
      let reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
    return result;
  };
  console.log(getPalindromes(a));
  
  // Output:
  // [ 'level', 'racecar', 'madam', '121', '44']