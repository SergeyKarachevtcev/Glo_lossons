"use strict";

const titleElement = document.getElementsByTagName("h1")[0];
const handlerBtn = document.getElementsByClassName("handler_btn");
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
const resetBtn = document.getElementById("reset");
const range = document.getElementById("range");

const customCheckbox = document.querySelectorAll(".custom-checkbox");

let screens = document.querySelectorAll(".screen");

console.log(screens);

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


	isError: false,

	start: function () {
		screens = document.querySelectorAll(".screen");
		console.log(screens);

		this.isError = false;
		
		screens.forEach((screen) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			if (select.value === "" || input.value === "") {
				this.isError = true;
			}
		});
		if (!this.isError) {
			appData.addScreens();
			appData.addServices();
			appData.addPrices();
			/* appData.logger(); */
			appData.disabledCustomChecbox();
			appData.handlerClickResetBtn();
			console.log(appData);
			appData.showResult();
		}
	},
	disabledCustomChecbox: function () {
		range.disabled = true;
		/* блокирую инпуты и селекторы */
		screens.forEach((screen) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			select.disabled = true;
			input.disabled = true;
		});
		screenPlus.disabled = true;
		customCheckbox.forEach(function (checkbox) {
			checkbox.disabled = true;
		});
	},
	handlerClickResetBtn: function () {
		resetBtn.style.display = "none";
		startBtn.style.display = "block";
		screenPlus.disabled = false;
		console.log(screenPlus);
		range.disabled = false;
		/* разблокирую инпуты и селекторы */
		screens.forEach((screen) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			select.disabled = false;
			input.disabled = false;
		});
		customCheckbox.forEach(function (checkbox) {
			checkbox.disabled = false;
			checkbox.checked = false;
		});
	},

	init: function () {
		appData.addTitle();
		startBtn.addEventListener("click", appData.start);
		screenPlus.addEventListener("click", appData.addScreenBlock);
		rangeInput.addEventListener("input", function () {
			appData.rollback = +rangeInput.value;
			rangeValue.textContent = appData.rollback;
		});
		resetBtn.addEventListener("click", this.handlerClickResetBtn);
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
		for (let key in appData.servicePercentPrice) {
			appData.servicePercentPrice += appData.screenPrice * (appData.servicePercentPrice[key] / 100);
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
