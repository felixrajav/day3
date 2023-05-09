//      Rotate an array by k times
//  IIFE function

let  rotate = (function(arr, k) {
  let len = arr.length;
  let rotations = k % len;
  return arr.slice(rotations, len).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2)

console.log(rotate);
//   Output:
// [ 3, 4, 5, 1, 2 ]