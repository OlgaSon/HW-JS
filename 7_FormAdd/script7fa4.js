let formFi = document.forms['drawFigure'];

const selectFigure = () => {
    figure = formFi.elements['typeFigure'].value;
    if (figure === "square") {
        formFi['side'].classList.remove('display-none');
        formFi['anotherSide'].classList.add('display-none');
        formFi['radius'].classList.add('display-none');
    };
    if (figure === "rectangle") {
        formFi['side'].classList.remove('display-none');
        formFi['anotherSide'].classList.remove('display-none');
        formFi['radius'].classList.add('display-none');
    };
    if (figure === "circle") {
        formFi['radius'].classList.remove('display-none');
        formFi['side'].classList.add('display-none');
        formFi['anotherSide'].classList.add('display-none');
    };
};

function drawFigure(e) {
    figure = formFi.elements['typeFigure'].value;
    color = formFi.elements['color'].value;
    mTop = formFi.elements['mTop'].value;
    mLeft = formFi.elements['mLeft'].value;
    radius = formFi.elements['radius'].value;
    a = formFi.elements['side'].value;
    b = formFi.elements['anotherSide'].value;

    const divFigure = document.createElement("div");
    divFigure.style.border = "1px solid black";
    divFigure.style.backgroundColor = color;
    divFigure.style.marginTop = mTop + "px";
    divFigure.style.marginLeft = mLeft + "px";
    if (figure === "square") {
        divFigure.style.width = a + "px";
        divFigure.style.height = a + "px";
    };
    if (figure === "rectangle") {
        divFigure.style.width = a + "px";
        divFigure.style.height = b + "px";
    };
    if (figure === "circle") {
        divFigure.style.width = radius + "px";
        divFigure.style.height = radius + "px";
        divFigure.style.borderRadius = "50%";
    };
    document.getElementsByClassName('task4')[0].append(divFigure);

    e.preventDefault();
    e.target.parentNode.reset();
};

formFi.elements['typeFigure'].addEventListener('change', selectFigure);
formFi.elements['submiteFigure'].addEventListener('click', drawFigure);


/* Задание 4
Создать функцию, которая создает геометрическую фигуру, данные о фигуре из формы - 
можно выбрать форму фигуры, ввести цвет, размеры, положение на странице. 
Если выбран круг, то появляется поле ввода радиуса, 
если квадрат, то сторона, 
если прямоугольник, то 2 поля размера. */