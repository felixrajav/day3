//  Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let OddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
OddNumbers(arr);
//out put=>  1 3 5 7 9