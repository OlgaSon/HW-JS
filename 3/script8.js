function digital_root(n) {
    let arr = n.toString().split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sign = arr.map(Number);
        sum += sign[i];
    };
    if (sum < 10) {
        return (sum);
    } else {
        n = sum;
        digital_root(n);
    };
    return digital_root(sum);
};
console.log(digital_root(132189));


// Задание 8*
// Нужно написать функцию, в которую мы передаем число, суммируем цифры
// данного числа до тех пор, пока не останется одна цифра, вот так:

// digital_root(16) 
// => 1 + 6 
// => 7

// digital_root(942) 
// => 9 + 4 + 2
// => 15
// => 1 + 5
// => 6

// digital_root(132189) 
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24
// => 2 + 4
// => 6