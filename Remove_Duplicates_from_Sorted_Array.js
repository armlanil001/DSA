
// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

let array = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(a){
   let x=0;
   for(let i=0;i<array.length;i++){
    if(a[i]>a[x]){
        x++;
        a[x]=a[i];
    }
   }return {k:x+1,a};
}

console.log(removeDuplicates(array));