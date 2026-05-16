function checkPower(n){
    if(n==1) return true;
    if(n%2!=0 || n<1) return false;
    return checkPower(n/2);
}
console.log(checkPower(16))