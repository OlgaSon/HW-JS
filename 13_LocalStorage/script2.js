"use strict";

const form2 = document.forms['message'];
const showMessage = (e) => {
    if (window.localStorage.getItem('dontShowAgain')) {
        form2.elements['dontShowAgain'].checked = window.localStorage.getItem('dontShowAgain');
        form2.classList.add('display-none');
    }
    else{
        form2.elements['dontShowAgain'].checked = false;
    };
};

const saveCheck = (e) => {
    if (form2.elements['dontShowAgain'].checked == true) {
        form2.classList.add('display-none');
        window.localStorage.setItem('dontShowAgain', form2.elements['dontShowAgain'].checked);
    };
    form2.classList.add('display-none');
    e.preventDefault();
};

form2.addEventListener('submit', saveCheck);
window.addEventListener('load', showMessage);


/* Задание 2.
Создать страницу, при открытии которой появляется модальное окно 
с каким-либо текстом, чекбоксом (с текстом "Не показывать больше") 
и кнопкой закрыть. Если был нажат чекбокс и нажата кнопка закрыть 
- при перезагрузке страницы модальное окно больше не должно появляться. */