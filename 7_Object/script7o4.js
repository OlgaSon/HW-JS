const message = {
    text: "anytext",
    setMessage(string) {
        message.text = string
    },
    
    showMessage() {
        alert(`новый message: ` + message.text);
    },
};

message.setMessage(123);
message.showMessage();


/* Задание 4.
Создать объект message с полем text и методами setMessage(string), showMessage().
При вызове метода setMessage() в поле text записывается переданная в качестве аргумента строка.
при вызове метода showMessage() вызывается alert() с содержимым поля text.*/