const prices = {
    apple: 2,
    pulm: 5,
    banana: 3,
};

let sum = 0;

sumPrices = (e) => {
    Object.values(e).forEach(element => {
        sum += element;
    });
    console.log(sum);
};

sumPrices(prices);


/* Задача 3
Есть объект prices с произвольным количеством свойств, содержащих цены продуктов.
Напишите функцию sumPrices(prices), которая возвращает сумму всех цен с помощью метода Object.values */