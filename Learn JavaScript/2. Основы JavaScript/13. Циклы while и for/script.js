'use strict';

// Задание 1

let i = 3;

while (i) {
  alert( i-- );
}
// 1, потому что сначала выводится i, а затем следующий шаг цикла уменьшает счётчик i на единицу (при i = 0, цикл остановится)

// Задание 2

let i = 0;
while (++i < 5) alert( i );
// 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i );
// 1, 2, 3, 4, 5

// Задание 3

for (let i = 0; i < 5; i++) alert( i );
// 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i );
// 0, 1, 2, 3, 4

// Задание 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert(i);
    }
}

// Задание 5

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// Задание 6

let num;

do {
    num = prompt('Введите число больше 100', 0);
} while (num <= 100 && num);

// Задание 7

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}