"use strict";

const checkName = () => {
    if (window.localStorage.getItem('name')) {
        const element = document.getElementById('greeting');
        element.innerText = `Hello, ${window.localStorage.getItem('name')}`;
        document.getElementById('greeting').classList.toggle('display-none');
    } else {
        document.forms['Login'].classList.toggle('display-none');
    };

    const saveName = (e) => {
        window.localStorage.setItem('name', document.forms[0].elements['name'].value);
        const element = document.getElementById('greeting');
        element.innerText = `Hello, ${window.localStorage.getItem('name')}`;
        element.getElementById('greeting').classList.toggle('display-none');
        e.target.classList.toggle('display-none');
    };

    document.forms[0].addEventListener('submit', saveName);
}

window.addEventListener('load', checkName);


/*Задание 1.
Создать страницу: поле ввода имени и кнопка сохранить. 
При нажатии кнопки - данные сохраняются в localStorage и 
на экране исчезают эти поля и кнопка и 
появляется сообщение - "Добро пожаловать, (имя)".
При перезагрузке страницы, если в localStorage есть эти данные - 
сообщение должно остаться на экране */