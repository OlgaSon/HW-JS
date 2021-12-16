"use strict";

const onSubmitConsole = (e) => {
    let formElements = e.target.elements;
    for (let i = 0; i < formElements.length-1; i++) {
        console.log(formElements[i], formElements[i].value);
    };
    formElements["submit"].disabled = true;
    e.target.reset();
    e.preventDefault();
};

document.forms['loginForm'].addEventListener('submit', onSubmitConsole);


/* Задание 1
Создать форму в HTML с 2 полями ввода и кнопкой отправки. 
Получить эту форму на событие отправки этой формы (т е нажатие кнопки),
сделать кнопку неактивной и очистить форму */