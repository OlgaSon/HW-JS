const rectangleEx = {
    height: 3,
    width: 2,
};
const userEx = {};

const isEmpty = (obj) => {
    console.log(Object.keys(obj).length > 0)
};

isEmpty(rectangle);
isEmpty(user);


/* Задание 6. 
Напишите функцию isEmpty(obj), 
которая возвращает true, если у объекта нет свойст, иначе false.*/