"use strict";

class Car {
    constructor(name, year, color) {
        this.name = name;
        this.year = year;
        this.color = color;
    };
    changeColor(newColor) {
        this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');



/* Задание 1.
Переписать функцию - конструктор в виде класса:

function Car(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.changeColor = function (newColor) {
        this.color = newColor;
    };
};

let car = new Car('BMW', 2012, 'red');
car.changeColor('black'); */