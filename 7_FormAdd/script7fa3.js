const form = document.forms['emailValidity'];
const emailField = document.getElementsByName('email')[0];
const submitButton = form.elements['submiteValidity']

function ValidateEmail(e) {
    switch (e.target) {
        case emailField:
            email = e.target.value;
            break;
        case submitButton:
            email = e.target.parentNode['email'].value;
            break;
    };
    
    const re = /\S+@\S+\.\S+/;

    if (re.test(email) === false) {
        alert('Please, correct email');
        emailField.focus();
    };
    e.preventDefault();
};

emailField.addEventListener('change', ValidateEmail);
submitButton.addEventListener('click', ValidateEmail);


/* Задание 3
Создать собственную валидацию поля емейл:
При потере фокуса или отправке формы, проверять с помощью 
регулярного выражения значение поля email и показывать ошибку, если оно не соответствует */