"use strict";

class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    get name() {
        return this.__name;
    };
    set name(value) {
        this.__name = value;
    };
    get age() {
        return this.__age;
    };
    set age(value) {
        this.__age = value;
    };
    go() {
        return console.log(`Yes, I can go`);
    };
    speak() {
        return console.log(`Yes, I can speak`);
    };
    eat() {
        return console.log(`Yes, I can eat`);
    };
    getInfo() {
        return console.log(`${this.name}'s age ${this.age}`);
    };
};

class Child extends Person4 {
    constructor(name, age, word) {
        super(name, age);
        this.word = word;
    };
    speak() {
        console.log(this.name + ` can speak only "` + this.word + `".`);
    };
    cry() {
        console.log(`Also ` + this.name + ` can cry.`);
    };
};

class Adult extends Person4 {
    constructor(name, age, country, childName) {
        super(name, age);
        this.country = country;
        this.childName = childName;
    };
    go() {
        return console.log(this.name + `: I can go to ` + this.country);
    };
    haveChild() {
        return console.log(this.name + `: I have ` + this.childName);
    }
};

let child = new Child('Pups', 2, 'mother');
child.getInfo();
child.speak();
child.cry();
let father = new Adult('Father', 34, 'Sweden', 'Pups');
father.getInfo();
father.go();
father.haveChild();


/* 
Задание 4.
Создать класс Person со стандартными свойствами (имя, возраст) 
и действиями (идти, разговаривать, есть) человека. 
От него наследовать классы Ребенок и Взрослый 
со своими особенными и методами свойствами
(например, у ребенка - плакать или ходить в школу) */