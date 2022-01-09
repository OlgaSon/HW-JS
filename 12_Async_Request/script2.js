"use strict";

const getUsers = async function (userNames) {
    const users = [];
    for (const user of userNames) {
        let userData = await getUserData(user);
        users.push(userData);
    }
    return users;
};

const getUserData = async function (username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json());
};

getUsers(["OlgaSon"]).then(data => console.log(data));


/* Задача 2
Создать асинхронную функцию getUsers(name), 
которая получает на вход массив логинов пользователей GitHub,
запрашивает у GItHub информацию о них и 
возвращает массив объектов-пользователей.
Информацию о пользователе с логином USERNAME доступна 
по ссылке: https://api.github.com/users/USERNAME. */