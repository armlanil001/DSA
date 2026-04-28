function negative(arr) {
    let number = 0;
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] < 0) {
            number += 1;
        }
    }
    return number;
}

let arr = [2, -4, 8, -9, -7, 0, 5]
let result = negative(arr);
console.log(result);
