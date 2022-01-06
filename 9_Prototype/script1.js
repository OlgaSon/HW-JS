"use strict";

const animal = {
    eat() {
        console.log("это метод eat из объекта animal");
    },
};

const Dog = function () {
};

Dog.prototype.eat = animal.eat;
new Dog().eat();


/* Задача 1.
Создать функцию конструктор Dog, который наследует метод eat из объекта animal.*/