let findMaxConsecutiveOnes = function (nums){
    let current=0,maxCount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            current++;
        }else{
            maxCount=Math.max(maxCount,current);
            current=0;
        }
    }
    return Math.max(maxCount,current);
}


console.log(findMaxConsecutiveOnes([1,1,0,1,0,1,1,1,1,1,1,0,1,1,1]));
  