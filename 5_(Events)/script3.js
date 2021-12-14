let color = prompt("Какого цвета нарисовать фигуру:", "red");
let mTop = prompt("Отступ сверху:", 30);
let mLeft = prompt("Отступ слева:", 30);
let radius = prompt("Если нужен круг, введи его радиус:", 100);
let a = prompt("Если нужен квадрат или прямогульник, введи его сторону:", 150);
let b = prompt("Введи вторую сторону прямоугольника:", 200);

function drawFigure(figure, color, mTop, mLeft, radius, a, b) {
    const divFigure = document.createElement("div");
    divFigure.className = figure;
    document.getElementsByClassName('task3')[0].append(divFigure);
    divFigure.style.border = "1px solid black";
    divFigure.style.backgroundColor = color;
    divFigure.style.marginTop = mTop + "px";
    divFigure.style.marginLeft = mLeft + "px";

    if (figure === "square") {
        divFigure.style.width = a + "px";
        divFigure.style.height = a + "px";
    }
    if (figure === "rectangle") {
        divFigure.style.width = a + "px";
        divFigure.style.height = b + "px";
    }
    if (figure === "circle") {
        divFigure.style.width = radius + "px";
        divFigure.style.height = radius + "px";
        divFigure.style.borderRadius = "50%";
    }
};

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'KeyW':
            return drawFigure("square", color, mTop, mLeft, radius, a, b);
        case 'KeyQ':
            return drawFigure("circle", color, mTop, mLeft, radius, a, b);
        case 'KeyE':
            return drawFigure("rectangle", color, mTop, mLeft, radius, a, b);
        default:
            alert("Ошибка")
    }
});


/* Задание 3
Создание геометрических фигур
Реализовать функцию drawFigure, которая принимает в качестве аргументов:
название геометрической фигуры, цвет заливки, 
положение от верхнего края страницы (css свойство top) и 
положение от левого края страницы (css свойство left), 
а также радиус, если это круг, 
сторону, если квадрат 
и ширину и высоту, если прямоугольник. 
Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W, прямоугольник - E.
Пример использования: 
drawFigure(‘круг’, ‘red’, 100, 200, 40); // рисует красный круг
с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края */