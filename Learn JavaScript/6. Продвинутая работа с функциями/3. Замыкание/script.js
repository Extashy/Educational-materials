'use strict';

// Задание 1

// Ответ: 0,1.

// Задание 2

// Будет работать.
alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

// Задание 3

// Будет ошибка.
// Блок if имеет свой scope, так что функция sayHi доступна только внутри блока if, а снаружи функции уже нет.

// Задание 4

function sum(a) {

  return function(b) {
    return a + b;
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4

// Задача 5

// inBetween:

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// inArray:

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// Задание 6

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

// Задание 7

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      alert( j );
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5