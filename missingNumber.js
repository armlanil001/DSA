let nums =[3,0,1];

function missingElement(nums){
    let n=nums.length;
    let totalSum = n*(n+1)/2;
//     let sum = 0;
//    for(let i=0;i<nums.length;i++){
//       sum+=nums[i];
//     }
 let sum = nums.reduce((x,s)=>x+s,0);
    return totalSum-sum;
    

}

console.log(missingElement(nums));

