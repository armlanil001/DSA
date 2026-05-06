// function zeroRight(nums){
//   for(let i=0;i<nums.length;i++){
//      if(nums[i]==0){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[j]!=0){
//                 let temp=nums[j];
//                 nums[j]=nums[i];
//                 nums[i]=temp;
//                 break;
//             }
//         }
       
//      }
//   }
//   return nums
// }

// console.log(zeroRight([0,1,0,3,12]));


let nums=[0,1,0,3,12];

function zeroRight(a){
   
  let x=0;
  for(let i=0;i<a.length;i++){
    if(a[i]!==0){
        a[x]=a[i];
        x++;
    }
  }

  for(let i=x;i<a.length;i++){
    a[i]=0;
  }
  return a;
}

console.log(zeroRight(nums));
