'use strict';

// Задание 1

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

// Задание 2

function sum(num) {
  let currentSum = num;

  function addNext(nextNum) {
    currentSum += nextNum;
    return addNext;
  }

  addNext.toString = function() {
    return currentSum;
  };

  return addNext;
}

console.log(sum(1)(2)); // 3
console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15