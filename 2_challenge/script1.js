let arr = [ 10, 3, 2, 5, 4];
let arrSort = bubbleSort(arr);
function bubbleSort(arr) {
    for (let a = 0; a < arr.length - 1; ++a) {
        for (let b = 0; b < arr.length - 1 - a; ++b) {
            if (arr[b] > arr[b+1]) {
                let c = arr[b];
                arr[b] = arr[b + 1];
                arr[b + 1] = c;
            }
        }
    }
    return arr;
};
console.log(arrSort);