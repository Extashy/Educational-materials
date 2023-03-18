'use strict';

// Задание 1

// 1. Решение с использованием цикла:

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 2. Решение через рекурсию:

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// 3. Решение с использованием формулы арифметической прогрессии:

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// Самый быстрый вариант решения - 
// с использованием формулы арифметической прогрессии, 
// т.к. он не требует выполнения цикла или рекурсии. 
// Самый медленный вариант - 
// рекурсия, т.к. она вызывает функцию множество раз, 
// что занимает много времени и памяти.

// Нет, при помощи рекурсии нельзя посчитать sumTo(100000), 
// т.к. это приведет к переполнению стека вызовов функций из-за большого количества рекурсивных вызовов.

// Задание 2

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// Задание 3

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Задание 4

// Решение с рекурсией будет более элегантным и компактным, 
// но может стать проблематичным при работе с очень большими списками из-за ограничения стека вызовов. 
// Решение с циклом будет менее компактным, но более эффективным для больших списков.

// Решение с циклом:

function printList(list) {
  let node = list;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

// Решение с рекурсией:

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

// Задача 5

// Решение с циклом:

function printReverseList(list) {
  let arr = [];
  let node = list;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// Решение с рекурсией:

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReverseList(list); // выведет 4, 3, 2, 1