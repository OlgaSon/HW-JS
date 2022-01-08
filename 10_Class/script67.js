"use strict";

class Ball {
    constructor(ballType) {
        ballType == null ? this.ballType = "regular" : this.ballType = ballType;
    };
};

const ball1 = new Ball();
const ball2 = new Ball("superBall");
console.log(ball1.ballType, ball2.ballType)


/* 
Задание 67.
Создать класс Ball, тип которого regular, если аргумент не передан, 
super, если передан аргумент “superBall”.
ball1 = new Ball();
ball2 = new Ball("superBall");
ball1.ballType //=> "regular"
ball2.ballType //=> "superBall" */