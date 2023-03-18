'use strict';

// Задание 1

/*
HTML:

<body style="height:3000px">
  <h2>Click on button below</h2>
  <input type="button" value="Click to see the form" id="show-button">
  <div id="prompt-form-container">
    <form id="prompt-form">
      <div id="prompt-message"></div>
      <input name="text" type="text">
      <input type="submit" value="Ok">
      <input type="button" name="cancel" value="Отмена">
    </form>
  </div>
</body>

CSS:

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#prompt-form {
  display: inline-block;
  padding: 5px 5px 5px 70px;
  width: 200px;
  border: 1px solid black;
  background: white url(https://en.js.cx/clipart/prompt.png) no-repeat left 5px;
  vertical-align: middle;
}

#prompt-form-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: none;
  width: 100%;
  height: 100%;
  text-align: center;
}

#prompt-form-container:before {
  display: inline-block;
  height: 100%;
  content: '';
  vertical-align: middle;
}

#cover-div {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.3;
}

#prompt-form input[name="text"] {
  display: block;
  margin: 5px;
  width: 180px;
}

JS:

function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';

  document.body.style.overflowY = 'hidden';

  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function() {
    let value = form.text.value;
    if (value == '') return false;

    complete(value);
    return false;
  };

  form.cancel.onclick = function() {
    complete(null);
  };

  document.onkeydown = function(e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  orm.elements.text.focus();
}

document.getElementById('show-button').onclick = function() {
  showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert("Вы ввели: " + value);
  });
};
*/