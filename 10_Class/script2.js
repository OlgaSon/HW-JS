"use strict";

class Person {
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
    getInfo() {
        return `${this.name}'s age ${this.age}`;
    };
};
let newPerson = new Person("John", 34);
console.log(newPerson.getInfo());


/* Задача 2.
Ваша задача реализовать класс Person. 
Вы должны заполнить метод Constructor, чтобы принять имя как строку и возраст как число, 
реализовать метод getInfo получения информации, который должен вернуть, 
например, “john;s age 34” */