'use strict';

// Задание 1

/*
HTML:

<body>
  <div id="container">
    <div class="pane">
      <h3>Лошадь</h3>
      <p>Домашняя лошадь - животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, 
      вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
      <button class="remove-button">[x]</button>
    </div>
    <div class="pane">
      <h3>Осёл</h3>
      <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. 
      Все одомашненные ослы относятся к африканским ослам.</p>
      <button class="remove-button">[x]</button>
    </div>
    <div class="pane">
      <h3>Кошка</h3>
      <p>Кошка, или домашняя кошка (лат. Félis silvéstris cátus), — домашнее животное, одно из наиболее популярных 
      (наряду с собакой) "животных-компаньонов". С точки зрения научной систематики, домашняя кошка — млекопитающее семейства кошачьих отряда хищных. 
      Ранее домашнюю кошку нередко рассматривали как отдельный биологический вид.
      </p>
      <button class="remove-button">[x]</button>
    </div>
  </div>
</body>

CSS:

body {
  margin: 10px auto;
  width: 470px;
}

h3 {
  margin: 0;
  padding-bottom: .3em;
  padding-right: 20px;
  font-size: 1.1em;
}

p {
  margin: 0;
  padding: 0 0 .5em;
}

.pane {
  background: #edf5e1;
  padding: 10px 20px 10px;
  border-top: solid 2px #c4df9b;
  position: relative;
}

.remove-button {
  position: absolute;
  font-size: 110%;
  top: 0;
  color: darkred;
  right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
}

JS:

container.onclick = function(event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
};

// Задание 2

HTML:

<body>
  <ul class="tree" id="tree">
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>
        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</body>

JS:

for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

tree.onclick = function(event) {
  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
}

// Задание 3

HTML:

<body>
  <table id="grid">
    <thead>
      <tr>
        <th data-type="number">Возраст</th>
        <th data-type="string">Имя</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>Вася</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Петя</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Женя</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Маша</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Илья</td>
      </tr>
    </tbody>
  </table>
</body>

CSS:

table {
  border-collapse: collapse;
}
     
th, td {
  border: 1px solid black;
  padding: 4px;
}
     
th {
  cursor: pointer;
}
     
th:hover {
  background: yellow;
}

JS:

grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;

  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);


  let compare;

  switch (type) {
    case 'number':
    compare = function(rowA, rowB) {
      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
    };
    break;
    case 'string':
    ompare = function(rowA, rowB) {
      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
    };
    break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}

// Задание 4

let tooltipElem;

  document.onmouseover = function(event) {
    let target = event.target;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
  };

  document.onmouseout = function(e) {

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

  };
*/