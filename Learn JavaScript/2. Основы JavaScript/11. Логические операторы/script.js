'use strict';

// // Задание 1

alert( null || 2 || undefined ); // 2

// // Задание 2

alert( alert(1) || 2 || alert(3) ); // 1, затем 2

// // Задание 3

alert( 1 && null && 2 ); // null

// // Задание 4

alert( alert(1) && alert(2) ); // 1, затем undefined

// // Задание 5

alert( null || 2 && 3 || 4 ); // 3

// Задание 6

if (age >= 14 && age <= 90);

// // Задание 7

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// // Задание 8

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
// Выполнятся первое и третье

// Задание 9

const loginResult = prompt('Введите Ваш логин', '');

if (loginResult === 'Админ') {

    let passwordResult = prompt('Введите Ваш пароль', '');
    
    if (passwordResult === 'Я главный') {
        alert('Здравствуйте!');
    } else if (passwordResult === '' || passwordResult === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (loginResult === '' || loginResult === null) {
    alert('Отменено');
} else {
    alert('Я Вас не знаю');
}