let user = {
    name: 'Ann',
    email: 'ann@gmail.com',
    phone: '1234567890',
    id: 'abc123'
};

// 1. Через копирование всех свойств:
let newUser1 = {};
for (let key in user) {
    newUser1[key] = user[key];
};
console.log(newUser1)

// 2. Через Object.assign():
let newUser2 = Object.assign({}, user);
console.log(newUser2);


/* Задание 2.
Создать объект user со свойствами name, email, phone, id. 
Скопировать этот объект со всеми свойствами в новую переменную newUser. */