let userName = prompt("Введи своё имя:", "имя");

function sayHello(userName) {
    let message = 'Hello, ' + userName;
    alert(message);
}
userName === "Mark" ? alert("Hi, " + userName): sayHello(userName);

// Задание 0
// Лизе нужно написать функцию sayHello(name), которая возвращает
// приветствие для пользователя. Тем не менее, она влюблена в пользователя
// с именем “Mark”, и хотела бы поприветствовать его немного иначе.
// Помогите ей)
// Пример вызовов:
// sayHello(“Oleg”); // Hello, Oleg!
// sayHello(“Viktor”); // Hello, Viktor!
// sayHello(“Mark”); // Hi, Mark!