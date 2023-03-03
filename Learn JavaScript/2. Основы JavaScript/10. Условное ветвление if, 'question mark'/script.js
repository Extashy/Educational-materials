'use strict';

// Задание 1

if ("0") {
    alert( 'Привет' );
  }
// Сообщение выведется, так как в скобках if ('0') - не пустая строка, что равно true

// Задание 2

if (prompt('Какое "официальное" название JavaScript?', '') === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// Задание 3

const value = prompt('Введите число', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

// Задание 4

let result = (a + b < 4) ? 'Мало' : 'Много';

// Задание 5

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';