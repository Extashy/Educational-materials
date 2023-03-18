'use strict';

// Задание 1

let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);

// Задание 2

let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');