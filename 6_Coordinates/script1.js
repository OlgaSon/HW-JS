"use strict";

const showCoord = (e) => {
    let y = window.pageYOffset;
    console.log(y);
};
window.addEventListener('scroll', showCoord());


/* Задание 1.
Выводить значение скрола от верха страницы на событие прокрутки страницы. */