"use strict";

const onSubmitPreset = (e) => {
    let formElements = e.target.elements;
    formElements[0].value = '2021-01-01';
    console.log(formElements["yearBegin"], formElements["yearBegin"].value);
    e.preventDefault();
};

document.forms['presetForm'].addEventListener('submit', onSubmitPreset);


/* Задание 2
Создать форму в HTML с полем ввода и кнопкой отправки, 
на submit формы менять значение поля ввода на произвольное */