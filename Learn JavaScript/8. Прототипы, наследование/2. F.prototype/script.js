'use strict';

// Задание 1

// 1. True.
// 2. False.
// 3. True.
// 4. Undefined.

// Задание 2

// Пример функции-конструктора, с которой вызов new obj.constructor() корректно сработает:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);
let person2 = new person1.constructor("Mike", 25);

console.log(person1); // Person { name: "John", age: 30 }
console.log(person2); // Person { name: "Mike", age: 25 }

// Пример функции-конструктора, с которой вызов new obj.constructor() может поведёт себя неправильно:

function Animal(type) {
  this.type = type;
}

Animal.prototype = {
  eat() {
    console.log("The animal is eating");
  }
};

let animal1 = new Animal("mammal");
let animal2 = new animal1.constructor("bird");

console.log(animal1); // Animal { type: "mammal" }
console.log(animal2); // Animal { type: "bird" }
console.log(animal2.eat()); // TypeError: animal2.eat is not a function

// В этом примере вызов new obj.constructor() создаст новый объект Animal с указанным типом, 
// но прототип объекта будет потерян из-за перезаписи Animal.prototype. Поэтому при вызове метода eat() у объекта animal2 возникнет ошибка.