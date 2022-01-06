"use strict";

const showButton = (e) => {
    let y = window.pageYOffset;
    let c = document.documentElement.clientHeight;
    let noneButton = document.forms['loginForm'].elements['noneButton'];
    noneButton.style.display = "none";
    if (y > c) {
        noneButton.style.display = "block";
    };
    console.log(y, c);
};

window.addEventListener('scroll', showButton());


/* Задание 2:
При скролле, в момент активного 2-го экрана, покажите фиксированную кнопку внизу страницы, 
которая будет до этого являться скрытой. */