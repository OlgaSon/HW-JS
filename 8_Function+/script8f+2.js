"use strict"

const printTimer = (n) => {
    setInterval(() => alert(`Прошло ` + n / 1000 + ` секунд`), n);
};
printTimer(5000);


/* Задача 2.
Напишите функцию, которая выводит через 5 секунд на экран сообщение "Прошло 5 секунд".*/