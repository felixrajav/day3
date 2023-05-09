//   Rotate an array by k times
// anonymousfunction

let arr = [1, 2, 3, 4, 5];
let  rotate = function(arr, k) {
  let len = arr.length;
  let rotations = k % len;
  return arr.slice(rotations, len).concat(arr.slice(0, rotations));
};

let rotatedarr = rotate(arr, 2);
console.log(rotatedarr);    
//   Output:
// [ 3, 4, 5, 1, 2 ]