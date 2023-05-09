// Return all the prime numbers in an array

let primeNumber =  (l,r)=>{
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i);
    }
arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
    console.log(arr);
};
primeNumber(50,100);
    // output => [ 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]