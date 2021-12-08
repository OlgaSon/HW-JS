function convertType1(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
            // break не нужен, т.к. есть return;
        default:
            alert("Ошибка")
    };
};
console.log(convertType1('my string', 'boolean'));


let convertType2 = function (value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    }
};
console.log(convertType2('my string', 'boolean'));


let convertType31 = (value, toType) => {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    }
};
console.log(convertType31('my string', 'boolean'));

let convertType32 = (value, toType) => {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
        default:
            alert("Ошибка")
    };
};
console.log(convertType32('my string', 'boolean'));


// Задание 6
// Перепишите функцию
// - заменив if else на конструкцию switch (convertType1)
// - через Function Expression (convertType2)
// - с помощью стрелочного синтаксиса (convertType3)

// function convertType(value, toType) {
//     if (toType === 'boolean') {
//         return Boolean(value);
//     } else if (toType === 'string') {
//         return String(value);
//     } else if (toType === 'number') {
//         return Number(value);
//     }
// }
// console.log(convertType('my string', 'boolean'));