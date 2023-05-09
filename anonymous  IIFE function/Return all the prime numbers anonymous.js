//      Return all the prime numbers in an array
// anonymous function

let primeNumber = function (l,r){
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i)
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
}
primeNumber(1,100);
// Output:
// [ 1, 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
 