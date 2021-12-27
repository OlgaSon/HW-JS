let floor = prompt('Введите американский этаж:');

function convertFloor(floor) {
    if (floor < 0 || floor > 13) {
        alert(floor)//где ";"?
    } else if (floor >= 0 && floor < 13 && floor !== null && floor !== "") {
        alert(++floor);
    } else alert("такой этаж не существует");//где "{" и "}"?
};
convertFloor(floor)//где ";"?


// Задание 5 “Этажи”
// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж,
// и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж
// (передается как целое число), и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
// convertFloor(-1) // -1
// convertFloor(0) // 1
// convertFloor(2) // 3
// convertFloor(12) // 13
// convertFloor(14) // 14
