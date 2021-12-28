"use strict"

let pow = (x, n) => {
    return (n !== 1) ? x * pow(x, n - 1) : x;
};
console.log(pow(2, 3));


/* Задача 0.
Создать функцию, которая возводит x в степень n.*/