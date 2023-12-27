"use strict";

let title = prompt("Как называется ваш проект?", "");
const screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const rollback = 75;
let adaptive = confirm("Нужен ли адаптив на сайте?");
const additionalServices = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice = +prompt("Сколько это будет стоить?", "пример: 12000");
const additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice02 = +prompt("Сколько это будет стоить?", "пример: 12000");

let fullPrice;
let servicePercentPrice;
let allServicePrices;

/* функции */

/* общая цена  доп услуги */
const getAllServicePrices = function () {
	return additionalServicesPrice + additionalServicesPrice02;
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
