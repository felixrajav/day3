//      Remove duplicates from an array
// IIFE function

let result = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})([1, 2, 3, 4, 5, 1, 2, 3]);

console.log(result);
// Output:
// [ 1, 2, 3, 4, 5 ]