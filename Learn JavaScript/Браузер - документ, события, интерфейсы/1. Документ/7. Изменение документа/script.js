'use strict';

// Задание 1

// Ответ: 1 и 3.

// Задание 2

function clear(elem) {
    elem.innerHTML = '';
}

// Задание 3

// Это происходит потому, что текст "aaa" находится внутри элемента таблицы, а не в самом объекте таблицы. 
// При удалении таблицы объект удаляется, но текст остается в DOM-дереве как отдельный узел. 
// Если вы хотите удалить и текст, то нужно обратиться к родительскому элементу таблицы и удалить его содержимое. 
// Например, так:

let table = document.getElementById('table');
table.parentNode.removeChild(table);

// Задание 4

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt('Введите текст для элемента списка', '');

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

// Задача 5

let data = {
    'Рыбы': {
      'форель': {},
      'лосось': {}
    },

    'Деревья': {
      'Огромные': {
        'секвойя': {},
        'дуб': {}
      },
      'Цветковые': {
        'яблоня': {},
        'магнолия': {}
      }
    }
};

function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {

    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;

}

let container = document.getElementById('container');
createTree(container, data);

// Задача 6

const lis = document.getElementsByTagName('li');

for (let li of lis) {

    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';

}

// Задача 7

/* <body>
    <div id="calendar"></div>
</body> */

function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) {
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);

// Задача 8

/* <body>

<div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
</div>

<input type="button" onclick="clockStart()" value="Start">
<input type="button" onclick="clockStop()" value="Stop">

</body> */

let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {

    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}

// Задача 9

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Задача 10

// Для сортировки таблицы по столбцу 'Name' можно использовать следующий код:

const table = document.querySelector('table'); // Получаем таблицу
const tbody = table.querySelector('tbody'); // Получаем тело таблицы
const rows = Array.from(tbody.querySelectorAll('tr')); // Получаем все строки таблицы и преобразуем их в массив

rows.sort(function(rowA, rowB) { // Сортируем массив строк
  const nameA = rowA.cells[0].textContent; // Получаем значение ячейки "Name" первой строки
  const nameB = rowB.cells[0].textContent; // Получаем значение ячейки "Name" второй строки
  if (nameA < nameB) return -1; // Сравниваем значения и возвращаем -1, если первое меньше второго
  if (nameA > nameB) return 1; // Возвращаем 1, если первое больше второго
  return 0; // Возвращаем 0, если значения равны
});

rows.forEach(function(row) { // Добавляем отсортированные строки в таблицу
  tbody.appendChild(row);
});

// Этот код получает таблицу, её тело и все строки, затем сортирует массив строк по значению ячейки 'Name' и добавляет отсортированные строки обратно в тело таблицы.