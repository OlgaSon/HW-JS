let arrTop = [];
let arrLeft = [];

function showMessage(text, bgColor, mTop, mLeft) {//проверка после вставки - не оптимально
    const divMessage = document.createElement("div");
    document.body.append(divMessage);//не тут
    divMessage.classList.add("message");
    divMessage.innerHTML = text;
    divMessage.style.backgroundColor = bgColor;
    divMessage.style.position = "absolute";
    divMessage.style.marginTop = mTop + "px";
    divMessage.style.marginLeft = mLeft + "px";
    arrTop.push(mTop);
    arrLeft.push(mLeft);

    for (i = 0; i < arrTop.length; i++) {

        let arr = document.querySelectorAll(".message");
        if (arr.length > 3) {
            arr[i].remove();
        };

        if (arrTop.indexOf(arrTop[i]) !== arrTop.lastIndexOf(arrTop[i])) {
            let j = arrTop.filter(function (n) {
                return n = arrTop[i];
            });
            divMessage.style.marginTop = (mTop + 25 * j.length) + "px";
        };
        if (arrLeft.indexOf(arrLeft[i]) !== arrLeft.lastIndexOf(arrLeft[i])) {
            let k = arrLeft.filter(function (m) {
                return m = arrLeft[i];
            });
            divMessage.style.marginLeft = (mLeft + 25 * k.length) + "px"
        };
    };
};

showMessage("111", "yellow", 100, 50);
showMessage("222", "green", 10, 5);
showMessage("333", "blue", 150, 150);
showMessage("444", "indigo", 150, 150);
showMessage("555", "brown", 150, 150);
showMessage("666", "orange", 150, 150);
showMessage("777", "red", 150, 150);

/* Задание 3
Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на странице 
с указанными аргументами: текст сообщения, цвет фона сообщения,
положение от верхнего края страницы (css свойство top) и положение от левого края страницы (css свойство left).
Пример вызова функции: showMessage(“Всем привет”, ‘yellow’, 100, 50);
** Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и
мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться.
** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие
же и top, и left). Если есть - занять позицию +25px left и right. Если и в этот раз у нас имеется
сообщение в данной позиции - повторять процедуру, пока не найдем свободное место. */
