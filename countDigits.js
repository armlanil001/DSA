function countDigits(n){

    let count = 0;
    while(n>0){
       n=Math.floor(n/10);
       count++;
    }
    return count
}

let result =countDigits(2345634756478468234);
console.log(result);
