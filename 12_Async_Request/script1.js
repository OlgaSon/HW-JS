"use strict";

function getTask(url) {
    fetch(url)
        .then(response => response.json())
        .then(body => console.log(body))
        .catch(err => console.log(err.status))
};

getTask('https://test-todoist.herokuapp.com/api/tasks');


/* Задача 1
Создайте асинхронную функцию getTask(), которая возвращает массив объектов категорий.
Данные получать по ссылке: https://test-todoist.herokuapp.com/api/tasks.
Необходимо вывести имена описание этих задач на странице в виде списка. */