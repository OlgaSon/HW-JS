let selfGeneratedUser = {
    getInfo() {
        selfGeneratedUser['name'] = prompt('name');
        selfGeneratedUser['email'] = prompt('email');
        selfGeneratedUser['phone'] = prompt('phone');
    },

    introduce() {
        for (key in selfGeneratedUser) {
            let s = Object.prototype.toString;
            if (selfGeneratedUser[key] === "" || selfGeneratedUser[key] === null)
                continue
            else if (s.call(selfGeneratedUser[key]) !== '[object Function]') {
                alert(selfGeneratedUser[key])
            };
        };
    },
};

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();
console.log(selfGeneratedUser)


/* Задание 7
Создать объект selfGeneratedUser с методами:
1) getInfo() - при вызове через prompt() поочередно получает данные 
name, email, phone пользователя и записывает их в соответствующие свойства объекта.
2) introduce() - поочередно выводит с помощью alert() name, email, phone пользователя.
Если поля нет - не выводит его, переходит к следующему. */