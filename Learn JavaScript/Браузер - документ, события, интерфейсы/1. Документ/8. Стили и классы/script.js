'use strict';

// Задание 1

function showNotification({top = 0, right = 0, className, html}) {
  let notification = document.createElement('div'); // Создаем элемент div для уведомления
  notification.classList.add('notification'); // Добавляем класс 'notification'
  if (className) { // Если передан дополнительный класс, добавляем его
    notification.classList.add(className);
  }
  notification.style.top = top + 'px'; // Задаем координаты элементу
  notification.style.right = right + 'px';
  notification.innerHTML = html; // Добавляем содержимое в элемент
  document.body.appendChild(notification); // Добавляем элемент на страницу

  setTimeout(() => { // Задержка на 1,5 секунды перед удалением элемента
    notification.remove(); // Удаляем элемент из DOM
  }, 1500);
}

// Test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);