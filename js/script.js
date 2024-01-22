"use strict";

const titleElement = document.getElementsByTagName("h1")[0];
const handlerBtn = document.getElementsByClassName("handler_btn");
const printHandlerBtn = handlerBtn[0]; // Access the first button
const cancellHandlerBtn = handlerBtn[1]; // Access the second button
const screenPlus = document.querySelector(".screen-btn");
const otherItemsNum = document.querySelectorAll(".other-items.number");
const otherItemsProcent = document.querySelectorAll(".other-items.percent");
const rangeInput = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector(".rollback .range-value");
const totalInput = document.getElementsByClassName("total-input");
const mainTotalCount = totalInput[0];
const totalCountTotalInput = totalInput[1];
const totalCountOther = totalInput[2];
const totalFullCount = totalInput[3];
const totalCountRollback = totalInput[4];
const startBtn = document.getElementById("start");

let screens = document.querySelectorAll(".screen");

const appData = {
	title: "",
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 0,
	servicePercentPrice: 0,
	servicePricesNumber: 0,
	servicePricesPersent: 0,
	servicesPercent: {},
	servicesNumber: {},
	fullPrice: 0,

	start: function () {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		/* appData.logger(); */
		console.log(appData);
		appData.showResult();
	},

	/* должен отключить левый блок про нажатии кнопки Старт */
	disableTextInputs: function () {
		const textInputs = document.querySelectorAll('input[type="text"]');
		textInputs.forEach(function (input) {
			input.disabled = true;
		});
	},

	init: function () {
		appData.addTitle();
		printHandlerBtn.addEventListener("click", appData.start);
		screenPlus.addEventListener("click", appData.addScreenBlock);
		printHandlerBtn.disabled = true;

		screens.forEach(function (screen) {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			select.addEventListener("change", validateInputs);
			input.addEventListener("input", validateInputs);
		});

		rangeInput.addEventListener("input", function () {
			appData.rollback = +rangeInput.value;
			rangeValue.textContent = appData.rollback;
		});

		function validateInputs() {
			let allInputsFilled = true;
			screens.forEach(function (screen) {
				const select = screen.querySelector("select");
				const input = screen.querySelector("input");
				if (select.value === "" || input.value === "") {
					allInputsFilled = false;
				}
			});
			printHandlerBtn.disabled = !allInputsFilled;
		}

		/* запускает функцию по отключению левого блока  */
		startBtn.addEventListener("click", function () {
			appData.disableTextInputs();
		});
	},

	addTitle: function () {
		document.title = titleElement.textContent;
	},

	addServices: function () {
		otherItemsNum.forEach(function (item) {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value;
			}
		});

		otherItemsProcent.forEach(function (item) {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value;
			}
		});
	},

	addScreens: function () {
		screens = document.querySelectorAll(".screen");
		screens.forEach(function (screen, index) {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			const selectName = select.options[select.selectedIndex].textContent;
			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
			});
		});
	},

	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen);
	},

	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price;
		}
		/* общая цена  доп услуги */
		for (let key in appData.servicesNumber) {
			appData.servicePricesNumber += appData.servicesNumber[key];
		}

		appData.fullPrice = appData.screenPrice + appData.servicePricesPersent + appData.servicePricesNumber;

		appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback) / 100);

		let totalInputSum = 0;
		screens.forEach(function (screen) {
			const input = screen.querySelector("input");
			totalInputSum += +input.value;
		});
		appData.totalInputSum = totalInputSum;
	},

	showResult: function () {
		mainTotalCount.value = appData.screenPrice;
		totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPersent;
		totalFullCount.value = appData.fullPrice;
		totalCountRollback.value = appData.servicePercentPrice;
		totalCountTotalInput.value = appData.totalInputSum;
	},

	logger: function () {
		for (let key in appData) {
			console.log(key + ": " + appData[key]);
		}
	},
};

/* вызов метода */
appData.init();
