function largest(arr) {
    let large = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}

let arr = [59,10,2,55,32,88]
let result = largest(arr);
console.log(result);