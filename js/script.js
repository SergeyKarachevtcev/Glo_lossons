"use strict";

let title;
let screens;
let screenPrice;
const rollback = 75;
let adaptive;
let additionalServices;
let additionalServicesPrice;
let additionalServices02;
let additionalServicesPrice02;

let fullPrice;
let servicePercentPrice;
let allServicePrices;

/* функции */

/* функция проверки занчения  */
const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

/* функция со всеми вопросами */
const asking = function () {
	title = prompt("Как называется ваш проект?", "");
	screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
	do {
		screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
	} while (!isNumber(screenPrice));
	adaptive = confirm("Нужен ли адаптив на сайте?");
};

/* общая цена  доп услуги */
const getAllServicePrices = function () {
	let sum = 0;
	let price = 0;
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			additionalServices = prompt("Какой дополнительный тип услуги нужен?");
		} else if (i === 1) {
			additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
		}
		do {
			price = +prompt("Сколько это будет стоить?", "пример: 12000");
		} while (!isNumber(price));
		sum += price;
	}
	return sum;
};

/* общий тотал (цена работы + доп услуги)  */
function getFullPrice() {
	return screenPrice + allServicePrices;
}

/* формат заголовка */
const getTitle = function () {
	const trimmedTitle = title.trim();
	let formattedTitle = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
	return formattedTitle;
};

/* итоговую стоимость за вычетом процента отката */
const getServicePercentPrices = function () {
	return Math.ceil(fullPrice - rollback);
};

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
};

/* размер скидки */
function getRollbackMessage(price) {
	if (price >= 0 && price <= 15000) {
		return "Скидка не предусмотрена";
	}
	if (price > 15000 && price <= 30000) {
		return "Даем скидку в 5%";
	}
	if (price < 0) {
		return "Что-то пошло не так";
	} else {
		return "Даем скидку в 10%";
	}
}

/* вызов функций */
asking(); /* вызов функции с вопросами */
allServicePrices = getAllServicePrices(); /* вызов функции (сложение доп услуг ) */
fullPrice = getFullPrice(); /* цена за работу + доп услуги */
title = getTitle(); /* форматирование названия проекта */
servicePercentPrice = getServicePercentPrices(); /* фулл прайс - откат */

showTypeOf(title); /* вызов функции проверки типа данных */ /* вывожу сообщение о скидке , вызываю функцию*/
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.length);
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость верстки экранов " + screenPrice + " рублей." + " Стоимость разработки сайта " + fullPrice + " рублей.");
