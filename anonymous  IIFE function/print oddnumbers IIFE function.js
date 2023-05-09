//Print odd numbers in an array IIFE fuction
(function odd(){
    for(let i=1;i<=10;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
})();
// Output: 1 3 5 7 9