const addToTable = (name, age) => {
    const tdName = document.createElement('td');
    tdName.innerText = name;
    const tdAge = document.createElement('td');
    tdAge.innerText = age;
    const trUser = document.createElement('tr');
    trUser.appendChild(tdName);
    trUser.appendChild(tdAge);
    return document.getElementsByTagName('tbody')[0].appendChild(trUser);
}

const addNewItemClick = (e) => {
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
};
const addClick = (e) => {
    e.preventDefault();
    const form = document.forms['feedbackForm'];
    if (Number(form.elements[1].value) < 18) {
        alert('forbidden');
    } else {
        addToTable(form.elements[0].value, form.elements[1].value);
    }
    form.reset();
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");

};
const cancelClick = (e) => {
    e.preventDefault();
    document.forms['feedbackForm'].reset();
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
};

document.getElementById("addNewItem").addEventListener('click', addNewItemClick);
document.getElementsByName("addBtn")[0].addEventListener('click', addClick);
document.getElementsByName("cancelBtn")[0].addEventListener('click', cancelClick);
