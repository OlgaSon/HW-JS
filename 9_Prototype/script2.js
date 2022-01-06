"use strict";

function Figure(color, width, height, positionX, positionY) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
};

Figure.prototype.calculateS = function () {
    return this.width * this.height;
};

Figure.prototype.draw = function () {
    let divFigure = document.createElement('div');
    divFigure.style.position = 'absolute';
    divFigure.style.border = '1px solid black';
    divFigure.style.backgroundColor = this.color;
    divFigure.style.width = this.width + 'px';
    divFigure.style.height = this.height + 'px';
    divFigure.style.left = this.positionX + 'px';
    divFigure.style.marginTop = this.positionY + 'px';
    divFigure.innerText = this.calculateS();
    document.getElementsByClassName('task2')[0].append(divFigure);
};


function Square() {
    Figure.apply(this, Array.from(arguments));
};

Square.prototype = Object.create(Figure.prototype);
Square.prototype.constructor = Square;


function Rectangle() {
    Figure.apply(this, Array.from(arguments));
};

Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;


function Round() {
    Figure.apply(this, Array.from(arguments));
}

Round.prototype = Object.create(Figure.prototype);
Round.prototype.constructor = Round;

Round.prototype.calculateS = function () {
    return (this.width / 2) ** 2 * Math.PI;
};

Round.prototype.draw = function () {
    let divFigure = document.createElement('div');
    divFigure.style.position = 'absolute';
    divFigure.style.border = '1px solid black';
    divFigure.style.backgroundColor = this.color;
    divFigure.style.width = this.width + 'px';
    divFigure.style.height = this.width + 'px';
    divFigure.style.left = this.positionX + 'px';
    divFigure.style.marginTop = this.positionY + 'px';
    divFigure.style.borderRadius = '50%';
    divFigure.innerText = this.calculateS();
    document.getElementsByClassName('task2')[0].append(divFigure);
};


let figSq = new Square('red', 150, 150, 100, 100);
figSq.draw();
let figRe = new Rectangle('yellow', 113, 200, 300, 300);
figRe.draw();
let figRo = new Round('green', 170, 170, 500, 500);
figRo.draw();


/* Задача 2.
Реализовать на основе протипного наследования создание 
геометрических фигур (например, базовая функция фигура, от которой 
наследуются функции рисования круга, квадрата, прямоугольника) - 
у фигур должны быть свойства цвета, размера, положения на странице, 
методы нарисовать фигуру, вычислить площадь фигуры. */