let date1 = new Date(2019, 11, 18, 12, 20);
console.log(date1);

/* Задание 1.
Создать дату 18 декабря 2019 года, 12 часов 20 минут. */




let weekDay = (day) => {
    switch (day) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    };
};
console.log(weekDay(new Date(2000, 02, 04).getDay()))

/* Задание 2.
Вывести, какой день недели был 4 марта 2000 года.*/




let dateMmm = new Date(1590749435756);
let year = dateMmm.getFullYear();
let month = dateMmm.getMonth();
month < 10 ? month = '0' + month : month;
let date = dateMmm.getDate();
date < 10 ? date = '0' + date : date;
let hours = dateMmm.getHours();
hours < 10 ? hours = '0' + hours : hours;
let minutes = dateMmm.getMinutes();
minutes < 10 ? minutes = '0' + minutes : minutes;

console.log(date + '.' + month + '.' + year + ' ' + hours + ':' + minutes);

/* Задание 3.
Вывести дату в формате dd.mm.yyyy hh:mm из количества милисекунд: 1590749435756.*/




let user = {
    name: "User photo",
    size: "200*200",
};
let jsonText = JSON.stringify(user);
newUser = JSON.parse(jsonText);
console.log(user, jsonText, newUser)

/* Задание 4.
Преобразуйте объект в JSON, затем прочитайте этот JSON в другую переменную. */