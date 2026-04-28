

function find(arr,x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}
let arr = [3, 5, 4, 2, 8, 9];
const result = find(arr,9);
console.log(result)