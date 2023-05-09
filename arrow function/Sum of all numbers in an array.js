 // Sum of all numbers in an array

 let numberarr=[1,5,6,8,11,8];

 let sum=(arr)=>{
     let total=0;
     for(let i=0;i<arr.length;i++){
         if (typeof arr[i]==="number"){
             total+=arr[i];
         }
     }
     return total;
 };sum(numberarr);
 console.log(sum);
//  output => 39