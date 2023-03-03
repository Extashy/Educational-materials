'use strict';

// Задание 1

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

// Задание 2

function count(obj) {
  return Object.keys(obj).length;
}