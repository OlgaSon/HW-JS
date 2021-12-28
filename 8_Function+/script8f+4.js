"use strict"

const messageButton = document.getElementsByClassName("showMessage")[0];
const showMessage = () => {
    setInterval(() => {
        messageButton.parentNode.querySelector('.message').classList.toggle('display-none');
        messageButton.parentNode.querySelector('.loading').classList.toggle('display-none');
    }, 5000);
};

messageButton.addEventListener('click', showMessage);


/* Задача 4.
По нажатию на кнопку показывать сообщение через 5 секунд, 
в течение которых должно появляться слово "loading", 
а после появления сообщения  - скрываться. */