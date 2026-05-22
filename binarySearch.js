let arr = [-1 ,0 ,3,6,8,12,21];
let target = 8;

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(right >=left){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]<target){
            left =mid+1;
        }else{
            right =mid-1
        }

    }
    return -1;
}

console.log(binarySearch(arr,target),'binarrry');
