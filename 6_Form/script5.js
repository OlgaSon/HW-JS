"use strict";

const onSubmitCreateObject = (e) => {
    let formElements = e.target.elements;
    formElements['telefon'].setAttribute('maxlength', '13');
    let user = {};
    user.name = formElements['userName'].value;
    user.surname = formElements['userSurname'].value;
    user.tel = formElements['telefon'].value;
    user.message = formElements['message'].value;

    /* for (let i = 0; i < formElements.length - 1; i++) {
        let a = formElements[i].name;
        let b = formElements[i].value;
        user.a = b; 
    };
    //затирает предыдущие значения, оставляя последнее значение цикла */

    /* let userData = new FormData(e.target);
    userData.append(formElements['userSurname'].name, formElements['userSurname'].value.value);
    // не записывает, объект пуст//
    for (let i = 0; i < formElements.length - 1; i++) {
        userData.append(formElements[i].name, formElements[i].value);
    }; 
    // не записывает, объект пуст */

    console.log({
        user
    });
    e.preventDefault();
};

document.forms['objectForm'].addEventListener('submit', onSubmitCreateObject);


/* Задание 5
Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения.
Для поля телефона задать максимальное количество символов 13, сообщение может быть большим.
При submit формы создавать объект со всеми значениями формы и выводить его. */