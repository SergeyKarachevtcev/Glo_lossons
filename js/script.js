"use strict";

/* объект */

const appData = {
	title: "",
	screens: "",
	screenPrice: 0,
	rollback: 75,
	adaptive: true,
	additionalServices: "",
	additionalServices02: "true",
	fullPrice: 0,
	servicePercentPrice: 0,
	allServicePrices: 0,

	/* метод проверки занчения  */
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	/* метод со всеми вопросами */
	asking: function () {
		appData.title = prompt("Как называется ваш проект?", "");
		appData.screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
		do {
			appData.screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
		} while (!appData.isNumber(appData.screenPrice));
		appData.adaptive = confirm("Нужен ли адаптив на сайте?");
	},

	/* общая цена  доп услуги */
	getAllServicePrices: function () {
		let sum = 0;
		let price = 0;
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				appData.additionalServices = prompt("Какой дополнительный тип услуги нужен?");
			} else if (i === 1) {
				appData.additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
			}
			do {
				price = +prompt("Сколько это будет стоить?", "пример: 12000");
			} while (!appData.isNumber(price));
			sum += price;
		}
		return sum;
	},

	/* общий тотал (цена работы + доп услуги)  */
	getFullPrice: function () {
		return appData.screenPrice + appData.allServicePrices;
	},

	/* формат заголовка */
	getTitle: function () {
		const trimmedTitle = appData.title.trim();
		let formattedTitle = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
		return formattedTitle;
	},

	/* итоговую стоимость за вычетом процента отката */
	getServicePercentPrices: function () {
		return Math.ceil(appData.fullPrice - appData.rollback);
	},

	/* размер скидки */
	getRollbackMessage: function (price) {
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
	},
	start: function () {
		appData.asking(); /* вызов метода с вопросами */
		appData.allServicePrices = appData.getAllServicePrices(); /* вызов метода (сложение доп услуг ) */
		appData.fullPrice = appData.getFullPrice(); /* цена за работу + доп услуги */
		appData.title = appData.getTitle(); /* форматирование названия проекта */
		appData.servicePercentPrice = appData.getServicePercentPrices(); /* фулл прайс - откат */
		this.loger();
	},
	loger: function () {
		console.log(appData.getTitle());
		console.log("allServicePrices " + appData.allServicePrices); /* стоимость доп услуг */
		console.log(appData.getRollbackMessage(appData.fullPrice)); /* цена за работу + доп услуги */
		console.log("Стоимость верстки экранов " + appData.screenPrice + " рублей." + " Стоимость разработки сайта " + appData.fullPrice + " рублей.");
	},
};

/* вызов метода */
appData.start();
