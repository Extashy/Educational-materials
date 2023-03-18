'use strict';

// Задание 1

// Ответ: null.

// Задание 2

// Ответ: Вася.

// Задание 3

// Выведет undefined, потому что при вызове bind создается новая функция, у которой нет свойства test. Свойство test было добавлено только к исходной функции sayHi.

// Задание 4

// Функция askPassword не получает контекст loginOk/loginFail.
// При вызове, this будет равен undefined.
// Необходимо использовать bind, для передачи контекста loginOk/loginFail в askPassword.

// Задание 5

askPassword(() => user.login(true), () => user.login(false));