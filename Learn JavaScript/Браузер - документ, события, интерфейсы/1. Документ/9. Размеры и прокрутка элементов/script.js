'use strict';

// Задание 1

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Задание 2

let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);

// Задание 3

<img src="ball.png" width="40" height="40" id="ball"></img>

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

// Задача 4

// 1. getComputedStyle(elem).width возвращает значение ширины элемента, включая значения padding, border и margin, 
// в то время как elem.clientWidth возвращает только значение ширины элемента без учета padding и border.
// 2. getComputedStyle(elem).width возвращает значение ширины в пикселях, 
// в то время как elem.clientWidth может возвращать значение в разных единицах измерения (например, em, rem, %).
// 3. getComputedStyle(elem).width может быть использовано для получения вычисленного значения ширины элемента после применения CSS-стилей, 
// в то время как elem.clientWidth может быть использовано только для получения фактического значения ширины элемента на момент выполнения кода.