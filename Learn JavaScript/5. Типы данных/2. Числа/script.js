'use strict';

// Задание 1

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

// Задание 2

alert(Math.round(6.35 * 10) / 10);

// Задание 3

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

// Задание 5

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// Задача 6

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 3));