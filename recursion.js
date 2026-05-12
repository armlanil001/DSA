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
printNn(1);