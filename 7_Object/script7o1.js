let car = {
    name: 'MTZ',
    model: 'Belarus-3522',
    capacity: '359 h.p. / 264 kW',
    tyres: {
        front: '600/65R34',
        back: '710/70R42'
    },
};
for(let key in car) {
    console.log(key, car[key])
} 



/* Задание 1.
Создать объект car с набором свойств по желанию. 
Вывести в цикле все ключи и значения объекта. */