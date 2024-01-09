let title;
let screens;
let screenPrice;
let adaptive;

let additionalServices;
let additionalServicesPrice;
let additionalServices02;
let additionalServicesPrice02;
let allServicePrices;

/* функция проверки занчения  */
const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

/* функция со всеми вопросами */
const asking = function () {
	title = prompt("Как называется ваш проект?", "");
	screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
	screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
	while (!isNumber(screenPrice)) {
		screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
	}
	adaptive = confirm("Нужен ли адаптив на сайте?");
};

/* общая цена  доп услуги */
const getAllServicePrices = function () {
	let sum = 0;
	for (i = 0; i < 2; i++) {
		if (i === 0) {
			additionalServices = prompt("Какой дополнительный тип услуги нужен?");
		} else if (i === 1) {
			additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
		}

		let price = +prompt("Сколько это будет стоить?", "пример: 12000");
		while (!isNumber(price)) {
			price = +prompt("Сколько это будет стоить?", "пример: 12000");
		}

		sum += price;
	}
	return sum;
};

asking();
allServicePrices = getAllServicePrices();
console.log("allServicePrices " + allServicePrices);
