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

let fullPrice = screenPrice + additionalServicesPrice + additionalServicesPrice02;

let servicePercentPrice = Math.ceil(fullPrice - rollback);

let allServicePrices;

const getAllServicePrices = function () {
	allServicePrices = additionalServicesPrice + additionalServicesPrice02;
	return allServicePrices;
};
getAllServicePrices();

function getFullPrice() {
	return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

const getTitle = function () {
	const trimmedTitle = title.trim();
	const formattedTitle = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
	return formattedTitle;
};
const projectTitle = getTitle();

const getServicePercentPrices = function () {
	return fullPrice - rollback;
};
servicePercentPrice = getServicePercentPrices();

function getRollbackMessage(price) {
	if (price >= 0 && price <= 15000) {
		return "Скидка не предусмотрена";
	}
	if (price > 15000 && price <= 30000) {
		return "Даем скидку в 5%";
	}
	if (price < 0) {
		return "Что-то пошло не так";
	}
	return "Даем скидку в 10%";
}
getRollbackMessage();

// Вызовы функции showTypeOf
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

// Вывод строки с типами экранов для разработки screens
console.log(screens);

// Вывод сообщения о скидке пользователю
console.log(getRollbackMessage(fullPrice));

// Вывод стоимости за вычетом процента отката посреднику
console.log(servicePercentPrice);

// Функция для вывода типа переменной
function showTypeOf(variable) {
	console.log(typeof variable);
}
