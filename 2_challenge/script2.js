// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
// }
// alert( pow(2, 3) ); // 8


// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = i;
// }
// console.log(arr);


// let arr = [];
// for (let i = 0; i <= 40; i++) {
//     function fibi(i) {
//         if (i === 0 || i === 1) {
//             return arr[i] = i;
//         } else {
//             return fibi(i - 1) + fibi(i - 2)
//         }
//     }
//     arr[i] = fibi(i);
// }
// console.log(arr);

// let arr = [];
// let i = 0;
// b = 0;
// while (b < 987) {
//     function fibi(i) {
//         if (i === 0 || i === 1) {
//             return arr[i] = i;
//         } else {
//             return fibi(i - 1) + fibi(i - 2)
//         }
//     }
//     b = fibi(i);
//     arr[i] = b;
//     i++;
// }
// console.log(arr);

let arr = [];
let i = 0;
b = 0;
while (b < 999999999) {
    function fibi(i) {
        if (i === 0 || i === 1) {
            return arr[i] = i;
        } else {
            return fibi(i - 1) + fibi(i - 2)
        }
    }
    b = fibi(i);
    arr[i] = b;
    i++;
}
console.log(arr);