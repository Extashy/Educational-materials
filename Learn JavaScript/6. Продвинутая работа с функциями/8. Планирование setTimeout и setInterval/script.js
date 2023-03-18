'use strict';

// Задание 1

// Решение 1: используя setInterval
function printNumbers(from, to) {
  let current = from;

  let intervalId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5); // выводит числа от 1 до 5 с интервалом в 1 секунду


// Решение 2: используя рекурсивный setTimeout
function printNumbers(from, to) {
  function print(current) {
    console.log(current);
    if (current < to) {
      setTimeout(print, 1000, current + 1);
    }
  }

  setTimeout(print, 1000, from);
}

printNumbers(1, 5); // выводит числа от 1 до 5 с интервалом в 1 секунду

// Задание 2

// После цикла.
// Alert покажет 100000000