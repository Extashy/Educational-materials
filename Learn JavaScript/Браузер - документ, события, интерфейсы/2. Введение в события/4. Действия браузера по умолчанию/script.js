'use strict';

// Задание 1

/*
Для того чтобы предотвратить переход по ссылке, необходимо добавить атрибут onclick с вызовом функции handler и вернуть false внутри обработчика события:
<a href="#" onclick="handler(); return false;">Нажми меня</a>
Таким образом, при клике на ссылку будет вызвана функция handler, которая выведет сообщение и вернет false, что предотвратит переход по ссылке.
Ещё можно использовать PreventDefault.
*/

// Задание 2 

/*
Для решения этой задачи можно использовать метод делегирования событий. 
Для этого нужно назначить обработчик события на элемент #contents и проверять, является ли целевой элемент ссылкой. 
Если да, то выводить сообщение и прерывать переход по ссылке.

Вот пример кода:

document.getElementById('contents').addEventListener('click', function(event) {
  const target = event.target;
  while (target != this) {
    if (target.tagName == 'A') {
      if (!confirm('Вы действительно хотите покинуть страницу?')) {
        event.preventDefault();
      }
      return;
    }
    target = target.parentNode;
  }
});

Этот код добавляет обработчик события click на элемент #contents. 
При клике на любой элемент внутри #contents происходит проверка, является ли он ссылкой. 
Если да, то выводится сообщение с вопросом о покидании страницы. 
Если пользователь отказывается покидать страницу, то переход по ссылке прерывается при помощи метода preventDefault().
*/

// Задание 3

/*
HTML:

<body>
  <p>
    <img id="largeImg" src="https://cdn.anime-pictures.net/previews/0b1/0b1a2590f524bc454c346f82615038d2_bp.png.avif" alt="Large image">
  </p>
  <ul id="thumbs">
    <li>
      <a href="https://cdn.anime-pictures.net/previews/51e/51e56cb6993e1fc9ace8f5b6eb8d5b21_bp.jpg.avif" title="Image 2"><img src="https://cdn.anime-pictures.net/previews/51e/51e56cb6993e1fc9ace8f5b6eb8d5b21_bp.jpg.avif"></a>
    </li>
    <li>
      <a href="https://cdn.anime-pictures.net/previews/0b1/0b1a2590f524bc454c346f82615038d2_bp.png.avif" title="Image 3"><img src="https://cdn.anime-pictures.net/previews/0b1/0b1a2590f524bc454c346f82615038d2_bp.png.avif"></a>
    </li>
    <li>
      <a href="https://cdn.anime-pictures.net/previews/fe9/fe904cf47f1f67610c2522620115cbc8_bp.jpg.avif" title="Image 4"><img src="https://cdn.anime-pictures.net/previews/fe9/fe904cf47f1f67610c2522620115cbc8_bp.jpg.avif"></a>
    </li>
    <li>
      <a href="https://cdn.anime-pictures.net/previews/242/2425843f9973e68866edd5861431389a_bp.jpg.avif" title="Image 5"><img src="https://cdn.anime-pictures.net/previews/242/2425843f9973e68866edd5861431389a_bp.jpg.avif"></a>
    </li>
    <li>
      <a href="https://cdn.anime-pictures.net/previews/90b/90bb9c76117b53acda8614929f75a6dc_bp.jpg.avif" title="Image 6"><img src="https://cdn.anime-pictures.net/previews/90b/90bb9c76117b53acda8614929f75a6dc_bp.jpg.avif"></a>
    </li>
  </ul>
</body>

CSS:

body {
  margin: 0;
  padding: 0;
  font: 75%/120% sans-serif;
}
  
#largeImg {
  border: solid 1px #ccc;
  width: 400px;
  height: 600px;
  padding: 5px;
}
  
#thumbs a {
  border: solid 1px #ccc;
  width: 100px;
  height: 100px;
  padding: 3px;
  margin: 2px;
  float: left;
}
  
#thumbs a:hover {
  border-color: #FF9900;
}
  
#thumbs li {
  list-style: none;
}
  
#thumbs {
  margin: 0;
  padding: 0;
}

a > img {
  width: 100px;
  height: 100px;
}

JS:

thumbs.onclick = function(event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
*/