let counter = 0;
const onAddElement = () => {
    counter++;
    const addDiv = document.createElement("div");
    addDiv.className = "task2__add_div";
    addDiv.innerHTML = "lorem" + counter;
    document.getElementsByClassName('task2__text')[0].appendChild(addDiv);
}
const onDeleteElement = () => {
    document.getElementsByClassName('task2__text')[0].lastChild.remove();
}

document.getElementsByClassName("task2__add")[0].addEventListener('click', onAddElement);
document.getElementsByClassName("task2__delete")[0].addEventListener('click', onDeleteElement);

/* Задание 2
Создать 2 кнопки со значениями удалить и добавить. 
При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. 
Добавлять можно сколько угодно раз. 
При нажатии кнопки удалить - удаляется последний добавленный элемент. */