'use strict';

// Задание 1

/*
HTML:

<body>
  <form>
    <label for="initial">Начальная сумма денег:</label>
    <input type="number" id="initial" min="0" step="1000" required>

    <label for="interest">Проценты (например, 0.05 означает 5% в год):</label>
    <input type="number" id="interest" min="0" max="1" step="0.01" required>

    <label for="years">Сколько лет ждать:</label>
    <input type="number" id="years" min="1" max="50" required>

    <button type="submit">Рассчитать</button>
  </form>
</body>

CSS:

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

label {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

input[type="number"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

button:hover {
  background-color: #3e8e41;
}

h2 {
  margin-top: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

JS:

const form = document.querySelector('form');
const initialInput = document.getElementById('initial');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const initial = +initialInput.value; // преобразуем введенное значение в число
  const interest = +interestInput.value;
  const years = +yearsInput.value;

  const result = Math.round(initial * (1 + interest) ** years);

  alert(`Через ${years} лет на вашем счету будет ${result} рублей`);
});
*/