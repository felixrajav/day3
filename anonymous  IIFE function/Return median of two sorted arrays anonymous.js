   //      Return median of two sorted arrays of the same size.
// anonymous function
 let arr1=[1, 3, 5];
  let arr2=[2, 4, 6];

let getMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.sort(function(a, b) {
    return a - b;
  });
  const length = mergedArray.length;
  const middle = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};
console.log(getMedian(arr1,arr2 ));
//  Output:
// 3.5