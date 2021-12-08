let arr = [];

function transformArray(arr, index1, index2, adding) {
    let newArray = arr;
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i] + adding;
    }
    return newArray;
};
transformArray(arr);
console.log(transformArray(['fngp', 'kgei', 'fpos', 'clfw'], 2, 3, 'green'));


// Задание 7*
// Написать функцию transformArray(arr, index1, index2, adding), принимающий
// в качестве аргументов:
// 1) arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// 2) index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно
// поменять между собой местами (fpos и clfw нужно поменять местами)
// 3) adding - строка, которую необходимо дописать в конец к каждому элементу массива
// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно
// вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]