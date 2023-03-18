'use strict';

// Задание 1

const selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

const newOption = new Option('Классика', 'classic');
genres.append(newOption);

newOption.selected = true;