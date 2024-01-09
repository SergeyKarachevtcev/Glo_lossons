"use strict";

/* объект */

const appData = {
	title: "",
	screens: [],
	screenPrice: 0,
	rollback: 75,
	adaptive: true,
	additionalServices: {},
	fullPrice: 0,
	servicePercentPrice: 0,
	allServicePrices: 0,

	/* проверка на строку */
	isString: function (value) {
		return !appData.isNumber(value) && typeof value === "string";
	},
	/* метод проверки занчения  */
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	/* метод со всеми вопросами */
	asking: function () {
		do {
			appData.title = prompt("Как называется ваш проект?", "");
		} while (!appData.isString(appData.title));

		for (let i = 0; i < 2; i++) {
			let price = 0;
			let name = "";

			do {
				name = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
			} while (!appData.isString(name));

			do {
				price = prompt("Сколько будет стоить данная работа?", "пример: 12000");
			} while (!appData.isNumber(price));
			appData.screens.push({ id: i, name: name, price: +price });
		}

		for (let i = 0; i < 2; i++) {
			let price = 0;
			let name = "";

			do {
				name = prompt("Какой дополнительный тип услуги нужен?", "");
			} while (!appData.isString(name) || !isNaN(parseFloat(name)));

			do {
				price = prompt("Сколько это будет стоить?", "пример: 12000");
			} while (!appData.isNumber(price));
			appData.additionalServices[name] = +price;
		}

		appData.adaptive = confirm("Нужен ли адаптив на сайте?");
	},

	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price;
		}
		/* общая цена  доп услуги */
		for (let key in appData.additionalServices) {
			appData.allServicePrices += appData.additionalServices[key];
		}
	},

	/* общий тотал (цена работы + доп услуги)  */
	getFullPrice: function () {
		appData.fullPrice = appData.screenPrice + appData.allServicePrices;
	},

	/* формат заголовка */
	getTitle: function () {
		const trimmedTitle = appData.title.trim();
		appData.title = trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase();
		return;
	},

	/* итоговую стоимость за вычетом процента отката */
	getServicePercentPrices: function () {
		appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.rollback);
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
		appData.addPrices();

		appData.getFullPrice(); /* цена за работу + доп услуги */
		appData.getTitle(); /* форматирование названия проекта */
		appData.getServicePercentPrices(); /* фулл прайс - откат */

		appData.logger();
	},
	logger: function () {
		for (let key in appData) {
			console.log(key + ": " + appData[key]);
		}
	},
};

/* вызов метода */
appData.start();
