"use strict";

let arr = [];
let resultTotal;
let resultIncome;
let resultExpense;

const onSubmitCalc = (e) => {
    let formElements = e.target.elements;
    let a = formElements["sum"].valueAsNumber;
    if (formElements['operation'][0].checked === true) {
        arr.push(a);
    } else if (formElements['operation'][1].checked === true) {
        arr.push(-a);
    } else {
        alert("Select operation!")
    };
    calcResult();
    e.preventDefault();
    e.target.reset();
    console.log(arr);
};

let calcResult = () => {
    resultTotal = arr.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    resultIncome = arr.reduce(function (sum, elem) {
        if (elem > 0) {
            return sum + elem;
        } else return sum
    }, 0);
    resultExpense = arr.reduce(function (sum, elem) {
        if (elem < 0) {
            return sum + elem;
        } else return sum
    }, 0);
    console.log(`Total: ` + resultTotal);
    console.log(document.getElementsByClassName('calcDiagramm')[0]);
    drawDiagram();
}

let drawDiagram = () => {
    if (Math.abs(resultIncome) > Math.abs(resultExpense)) {
        document.getElementsByClassName('income')[0].style.height = '100%';
        document.getElementsByClassName('expense')[0].style.height = (-resultExpense / resultIncome) * 100 + "%";
    } else if (Math.abs(resultIncome) < Math.abs(resultExpense)) {
        document.getElementsByClassName('expense')[0].style.height = '100%';
        document.getElementsByClassName('income')[0].style.height = (-resultIncome / resultExpense) * 100 + "%";
    } else {
        document.getElementsByClassName('income')[0].style.height = '100%';
        document.getElementsByClassName('expense')[0].style.height = '100%';
    };
    document.getElementsByClassName('total')[0].innerText = `Total: ` + resultTotal;
    document.getElementsByClassName('income')[0].innerText = `Income: ` + resultIncome;
    document.getElementsByClassName('expense')[0].innerText = `Expense: ` + (-resultExpense);
};

// if (resultTotal === 0) {
//     document.getElementsByClassName('income')[0].style.height = "50%";
//     document.getElementsByClassName('expense')[0].style.height = "50%";
// } else {
//     document.getElementsByClassName('income')[0].style.height = (resultIncome / resultTotal * 50) + "%";
//     document.getElementsByClassName('expense')[0].style.height = -(resultExpense / resultTotal * 50) + "%";
// }
// document.getElementsByClassName('income')[0].innerText = (resultIncome);
// document.getElementsByClassName('expense')[0].innerText = -(resultExpense);
// };

document.forms['calcForm'].addEventListener('submit', onSubmitCalc);


/* Задание 1
Создать калькулятор расхода и дохода. 
Пользователь вводит число в поле ввода и выбирает с помощью radio кнопки доход это или расход. 
На нажатие кнопки нужно рассчитать текущее значение счета, 
а также отрисовать столбики диаграммы дохода и расхода разными цветами. 
При нажатии кнопки поля ввода очищаются */