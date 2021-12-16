"use strict";

const onSubmitRequired = (e) => {
    let formElements = e.target.elements;
    if (formElements['telefon'].value == "") {
        alert(`Заполните ` + formElements['telefon'].name);
        formElements['telefon'].focus();
    };
    e.preventDefault();
};

document.forms['requiredForm'].addEventListener('submit', onSubmitRequired);


/* Задание 4
Создать форму в HTML с полем ввода и кнопкой отправки.
На submit формы, если поле ввода пустое, делать фокус на поле ввода. */