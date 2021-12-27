function* generateEven(from, to) {
    let a;
    from > 0 ? a = from : from = 2;
    from % 2 == 0 ? a = from : a = from + 1;
    yield a;
    let b = a;
    while (b <= (to - 2)) {
        // [a, b] = [b, b + 2];
        b += 2;
        yield b;
    };
};

// // 2 вариант:
// function* generateEven(from, to) {
//     from > 0 ? a = from : a = 2;
//     for (a; a <= to; a++) {
//         if (a % 2 == 0) {
//             yield a;
//         }
//     }
// };

let sec = generateEven(-100, 10);
console.log(sec.next().value);
console.log(sec.next().value);
console.log(sec.next().value);
console.log(sec.next().value);
console.log(sec.next());
console.log(sec.next());


/* Задача 1.
Создать генератор, который возвращает на каждый вызов четное число из промежутка, 
переданного в аргументы генератора: generator (from, to). */