'use strict';

// Задание 1

document.getElementById('hider').onclick = function() {
  document.getElementById('text').hidden = true;
}

// Задача 2

//<input type="button" onclick="this.hidden=true" value="Click to hide">

// Задача 3

// Ответ: 1 и 2.

// Задача 4

const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballRadius = ball.offsetWidth / 2;
const fieldRect = field.getBoundingClientRect();

field.addEventListener('click', function(event) {
  const clickX = event.clientX - fieldRect.left;
  const clickY = event.clientY - fieldRect.top;

  let ballX = clickX - ballRadius;
  let ballY = clickY - ballRadius;

  // Проверяем, чтобы мяч не выходил за границы поля
  if (ballX < 0) {
    ballX = 0;
  } else if (ballX + ball.offsetWidth > field.offsetWidth) {
    ballX = field.offsetWidth - ball.offsetWidth;
  }
  if (ballY < 0) {
    ballY = 0;
  } else if (ballY + ball.offsetHeight > field.offsetHeight) {
    ballY = field.offsetHeight - ball.offsetHeight;
  }

  // Анимируем перемещение мяча
  ball.style.transition = 'transform 0.5s';
  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
});

// Задача 5

/*
HTML:

<div id="sweeties" class="menu">
  <span class="title">Сладости (нажми меня)!</span>
  <ul>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>
</div>

CSS:

.menu ul {
  margin: 0;
  list-style: none;
  padding-left: 20px;
  display: none;
}

.menu .title {
  font-size: 18px;
  cursor: pointer;
}

.menu .title::before {
  content: '▶ ';
  font-size: 80%;
  color: green;
}

.menu.open .title::before {
  content: '▼ ';
}

.menu.open ul {
  display: block;
}

JS:

const getMenu = document.getElementById('sweeties');
const getTitle = menuElem.querySelector('.title');

getTitle.onclick = function() {
  getMenu.classList.toggle('open');
};
*/

// Задача 6

/*
HTML:

<div>
  <div class="pane">
    <h3>Лошадь</h3>
    <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
  </div>
  <div class="pane">
    <h3>Осёл</h3>
    <p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
  </div>
  <div class="pane">
    <h3>Кошка</h3>
    <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
  </div>
</div>

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

const panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
}
*/

// Задача 7

/*
HTML:

<body>
    <div id="carousel" class="carousel">
        <button class="arrow prev">⇦</button>
        <div class="gallery">
          <ul>
            <li><img src="https://cdn.anime-pictures.net/previews/51e/51e56cb6993e1fc9ace8f5b6eb8d5b21_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/0b1/0b1a2590f524bc454c346f82615038d2_bp.png.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/fe9/fe904cf47f1f67610c2522620115cbc8_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/242/2425843f9973e68866edd5861431389a_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/90b/90bb9c76117b53acda8614929f75a6dc_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/38f/38fa317e7cdf531f5db4033d9ed163a4_bp.png.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/82a/82ab720cbd4b94471dd0a0330435719a_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/f2a/f2a3aee395d8204ecdc01fa4c4034ebf_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/b9d/b9d66059a971e0c1cb7ddfb7baabcdcd_bp.jpg.avif"></li>
            <li><img src="https://cdn.anime-pictures.net/previews/1df/1dfb23ca1c6231a35e43754958206cd1_bp.jpg.avif"></li>
          </ul>
        </div>
        <button class="arrow next">⇨</button>
      </div>
</body>

CSS:

body {
  padding: 10px;
}
  
.carousel {
  position: relative;
  width: 398px;
  padding: 10px 40px;
  border: 1px solid #CCC;
  border-radius: 15px;
  background: #eee;
}
  
.carousel img {
  width: 200px;
  height: 200px;
  display: block;
}
  
.arrow {
  position: absolute;
  top: 60px;
  padding: 0;
  background: #ddd;
  border-radius: 15px;
  border: 1px solid gray;
  font-size: 24px;
  line-height: 24px;
  color: #444;
  display: block;
}
  
.arrow:focus {
  outline: none;
}
  
.arrow:hover {
  background: #ccc;
  cursor: pointer;
}
  
.prev {
  left: 7px;
}
  
.next {
  right: 7px;
}
  
.gallery {
  width: 390px;
  overflow: hidden;
  white-space: nowrap;
}
.gallery ul {
  height: 130px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: margin-left 250ms;
  font-size: 0;
  display: inline-block;
}
.gallery li {
  display: inline-block;
}

JS:

const i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

const width = 200;
const count = 2;

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

const position = 0;

carousel.querySelector('.prev').onclick = function() {

  position += width * count;

  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {

  position -= width * count;
  
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
*/