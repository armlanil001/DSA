//print n to 1 

function printN(num){

    if(num == 0)return;
    console.log(num);
    num--;
    printN(num)

}

// printN(12);

//print 1 to n
let n=10;
function printNn(num){
  if(num>n)return;
  console.log(num);
  
  printNn(++num)
}
// printNn(1);

function sum(n){
  if(n==0)return 0;
  return n + sum(n-1);
}
// console.log(sum(5));




//sum of nos in an array

let arr = [1,2,3,4,5]
function sumArray(n){
  if(n==0) return arr[0];
  return arr[n]+sumArray(n-1)

}

// console.log(sumArray(arr.length-1));


// sum o0f odd numbers


let sumOdd =[5,2,0,3,6,7];

function sumOfOdd(n){
  let isOdd = sumOdd[n]%2 != 0;
  if(n==0){
    return isOdd?sumOdd[n]:0;
  }
  return (isOdd?sumOdd[n]:0) + sumOfOdd(n-1);
}

console.log(sumOfOdd(sumOdd.length-1));
