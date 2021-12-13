let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
    "Sergey", "Ivan", "Alan"
];

const nameList = document.createElement("ol");
document.body.append(nameList);
// arr.forEach(function (name) {
for (let i = 0; i < arr.length; i++) {
    let eachName = document.createElement("li");
    eachName.innerText = arr[i];
    // eachName.innerText = name;
    nameList.append(eachName);

    if (i % 2 == 1) {
        eachName.setAttribute("class", "even");
        eachName.style.backgroundColor = "green";
    } else {
        eachName.setAttribute("class", "odd");
        eachName.style.backgroundColor = "blue";
    };

    for (j = 0; j < arr[i].length; j++) {
        if (arr[i].toLowerCase().indexOf(arr[i][j]) !== arr[i].toLowerCase().lastIndexOf(arr[i][j])) {
            eachName.style.color = "white";
        };
    }
};

/* Задание 2
Создать список элементов с помощью тега <ol> со значениями из массива строк: 
["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
"Sergey", "Ivan", "Alan"]
Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, 
а нечетный - “odd” и иметь синий фон.
Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы 
без учета регистра (например, Peter, Tatiana) - 
цвет текста должен стать белым. */