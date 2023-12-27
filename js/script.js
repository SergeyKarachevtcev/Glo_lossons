"use strict";

const title = prompt("Как называется ваш проект?", "");
const screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const rollback = 75;
let adaptive = confirm("Нужен ли адаптив на сайте?");
const additionalServices = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice = +prompt("Сколько это будет стоить?", "пример: 12000");
const additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice02 = +prompt("Сколько это будет стоить?", "пример: 12000");
let projectTitle;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

/* функции */

/* общая цена  доп услуги */
const getAllServicePrices = function () {
	allServicePrices = additionalServicesPrice + additionalServicesPrice02;
	return allServicePrices;
};

/* общий тотал (цена работы + доп услуги)  */
function getFullPrice() {
	fullPrice = screenPrice + allServicePrices;
	return fullPrice;
}

/* формат заголовка */
const getTitle = function () {
	const trimmedTitle = title.trim();
	const formattedTitle = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
	return formattedTitle;
};

/* итоговую стоимость за вычетом процента отката */
const getServicePercentPrices = function () {
	servicePercentPrice = Math.ceil(fullPrice - rollback);
	return servicePercentPrice;
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
		return "Что то пошло не так";
	} else {
		return "Даем скидку в 10%";
	}
}

/* вызов функций */

allServicePrices = getAllServicePrices(); /* вызов функции (сложение доп услуг ) */
fullPrice = getFullPrice(); /* цена за работу + доп услуги */
projectTitle = getTitle(); /* форматирование названия проекта */
servicePercentPrice = getServicePercentPrices(); /* фулл прайс - откат */

showTypeOf(title); /* вызов функции проверки типа данных */
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.length);
console.log(getRollbackMessage(fullPrice)); /* вывожу сообщение о скидке , вызываю функцию*/
console.log("Стоимость верстки экранов " + screenPrice + " рублей." + " Стоимость разработки сайта " + fullPrice + " рублей.");

/* console.log(servicePercentPrice);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей." + " Стоимость разработки сайта " + fullPrice + " рублей.");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100)); */
