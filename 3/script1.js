let a = prompt("a:", "0");
let b = prompt("b:", "0");

// function min(a, b) {
//     if (a < b) {
//         alert(a);
//     } else alert(b);
// }

let min = (a, b) => (a < b) ? alert(a) : alert(b);

min(a, b)

// Задание 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1)