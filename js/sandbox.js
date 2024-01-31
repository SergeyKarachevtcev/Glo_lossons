"use strict";
// Определение класса First
class First {
	hello() {
		console.log("Привет я метод родителя!");
	}
}
// Определение класса Second, наследующего от First
class Second extends First {
	hello() {
		super.hello(); // Вызов метода hello из First (First.prototype.hello.call(this); )
		console.log("А я наследуемый метод!");
	}
}
// Создание экземпляра класса Second
const obj = new Second();
obj.hello(); // Выводит "Привет я метод родителя!" и "А я наследуемый метод!" в консоль
