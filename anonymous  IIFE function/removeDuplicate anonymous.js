//    Remove duplicates from an array
// IIFE function
  
let  arr = [1, 2, 3, 4, 5, 1, 2, 3];


let remove = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};
let  result = remove(arr);
console.log(result);
// Output:
// [ 1, 2, 3, 4, 5 ]