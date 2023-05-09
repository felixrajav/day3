
// Return all the prime numbers in an array
// IIFE fuction

(function (a,b){
    let arr = [];
    for (i=a;i<b;i++)
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
})(10,20)
// Output:
// [ 11, 13, 17, 19 ]