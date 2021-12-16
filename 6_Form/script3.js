"use strict";

const onSubmitCheckbox = (e) => {
    let formElements = e.target.elements;
    console.log('firstName', ':', formElements['firstName'].value);
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'checkbox' && formElements[i].checked === true) {
            console.log(formElements[i].name, ':', formElements[i].value, '=', formElements[i].checked);
        };
    };
    e.preventDefault();
};

document.forms['checkboxForm'].addEventListener('submit', onSubmitCheckbox);


/* Задание 3
Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки.
На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox. */