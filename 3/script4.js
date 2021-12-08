let str = prompt ("Введите текст:");
function deleteChars (str) {
    str = str.slice (1, str.length-1);
    alert (str);
};
deleteChars (str)

// Задание 4
// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и
// последний символы строки, которая передается в параметр, и возвращает
// новую строку без этих символов.
// deleteChars(“Hello”); // ell
// deleteChars(“A”); // пустая строка