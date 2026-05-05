function zeroRight(nums){
  for(let i=0;i<nums.length;i++){
     if(nums[i]==0){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]!=0){
                let temp=nums[j];
                nums[j]=nums[i];
                nums[i]=temp;
                break;
            }
        }
       
     }
  }
  return nums
}

console.log(zeroRight([0,1,0,3,12]));
