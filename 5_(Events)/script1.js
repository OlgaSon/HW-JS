/* 1 вариант: Открывается подменю всех пунктов, которые доступны для перехода. */
/* const submenu = () => {
    document.getElementsByClassName('task1__menu')[0].classList.toggle("display-none");
    document.getElementsByClassName('task1__submenu')[1].classList.toggle("display-none");
    document.getElementsByClassName('task1__submenu')[2].classList.toggle("display-none");
}
document.getElementsByClassName('task1__menu')[0].addEventListener('mouseover', submenu);
document.getElementsByClassName('task1__menu')[0].addEventListener('mouseout', submenu); */

/* 2 вариант: Открывается подменю только выбранного пункта: */
let arr = document.querySelectorAll('.task1__link');
arr.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
        elem.parentNode.querySelector('.task1__submenu').classList.toggle('display-none')
    })
});
arr.forEach((elem) => {
    elem.addEventListener('mouseout', () => {
        elem.parentNode.querySelector('.task1__submenu').classList.toggle('display-none')
    })
})

/* Задание 1
При помощи обработчика событий отображать выпадающее меню
при наведении на любой из элементов навигации (пункты меню). */