function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
 if (arr.length < 2) {
        return null; // Not enough elements to find second largest
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest  && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
    
}


let arr = [10, 99, 4, 66, 78, 93,99];
let result = secondLargest(arr)
console.log(result)