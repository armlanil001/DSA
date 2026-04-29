function countDigits(n){
    n = Math.abs(n) //-ve nos fix
    let count = 0;  // 0 fix
    if(n==0){
        count=1;
    }
    while(n>0){
       n=Math.floor(n/10);
       count++;
    }
    return count
}

let result =countDigits(-67);
console.log(result);
