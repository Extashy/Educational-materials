'use strict';

// Задание 1

// <div>: document.body.firstElementChild
// <ul>: document.body.lastElementChild
// <li>: document.body.lastElementChild.lastElementChild

// Задание 2

// 1. Да.
// 2. Нет.

// Задание 3

const table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }