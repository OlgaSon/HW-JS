"use strict";

class Animal {
    constructor(name) {
        this.name = name;
    };
    get name() {
        return this.__name;
    };
    set name(value) {
        this.__name = value;
    };
    speak() {
        alert(this.name + 'says hi');
    };
};

class Cat extends Animal {
    constructor(name) {
        super(name);
    };
    speak() {
        console.log(this.name + ' meows');
    };
};

let mrCat = new Cat('Mr Cat');
mrCat.speak();


/* Ваша задача - реализовать класс Cat, который расширяет Animal, 
и заменить метод speak, чтобы вернуть имя кошки + мяу. 
Например, «Mr Cat meows.». Атрибут name передается с this.name:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        alert(this.name + ' says hi');
    }
}*/