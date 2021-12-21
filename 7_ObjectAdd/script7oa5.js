const array = ['Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11];

let [userName, userSurname, ...rest] = array;
let restSum = rest.reduce(function (sum, elem) {
    return sum + elem;
}, 0);
console.log(userName, userSurname, restSum);


/* Задача 5
Есть массив. Присвоить первое и второе значение массива к соответствующим переменным, 
а остальные значения сложить.*/