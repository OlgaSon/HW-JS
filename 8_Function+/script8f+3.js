"use strict"

const printNumbers = (from, to) => {
    let i = from;
    let timer = setInterval(() => {
        console.log(i);
        if (i == to) {
            clearInterval(timer);
        };
        i++;
    }, 1000);
};

// 2 вариант, рекурсия:
const printNumbers2 = (from, to) => {
    let i = from;
    setTimeout(function go() {
        console.log(i);
        if (i < to) {
            setTimeout(go, 1000);
        };
        i++;
    }, 1000);
};

printNumbers2(11, 15);
printNumbers2(21, 25);

/* Задача 3.
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
начиная от from и заканчивая to.*/