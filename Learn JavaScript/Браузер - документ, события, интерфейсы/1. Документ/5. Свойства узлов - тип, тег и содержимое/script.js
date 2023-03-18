'use strict';

// Задание 1

1. const lis = document.querySelectorAll("li");
   for (let li of lis) {
     console.log(li.firstChild.textContent);
   }

2. const lis = document.querySelectorAll("li");
   for (let li of lis) {
     console.log(li.getElementsByTagName("li").length);
   }

// Задание 2

// Ответ: 1.

// Задание 3

// Ответ: BODY.

// Задание 4

// 1. Объект document является экземпляром класса Document.
// 2. Объект document является корневым узлом в DOM-иерархии, то есть он является родительским элементом для всех других элементов на странице.
// 3. Класс Document наследует от класса Node, а тот, в свою очередь, наследует от класса EventTarget.