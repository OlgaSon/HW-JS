const pText = document.createElement("p");
pText.className = "text";
document.body.prepend (pText);
pText.innerHTML = "Это всего лишь текст";
const divAlert = document.createElement ("div");
divAlert.setAttribute("class", "alert");
divAlert.innerText = "А это сообщение об ошибке";
divAlert.style.backgroundColor = "red";
divAlert.style.color = "white";
divAlert.style.padding = "20px";
pText.append (divAlert);

/* Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”,
после него вставьте div с классом “alert” и с текстом “А это сообщение об
ошибке” с красным фоном, белым текстом и полями (padding) размером 20px */