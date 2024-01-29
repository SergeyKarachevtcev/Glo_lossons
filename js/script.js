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
let screensInput = document.querySelectorAll(".main-controls input[type=text]");
let viewsSelect = document.querySelectorAll(".views-select");

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
			appData.disabledChanges();
			appData.showResult();
			/* console.log(this); */
		}
	},

	/* запуск функции расчетов и блок кнопок инпутов */
	disabledChanges: function () {
		resetBtn.style.display = "block";
		startBtn.style.display = "none";
		screenPlus.disabled = true;
		range.disabled = true;

		/* блокирую инпуты и селекторы */
		screens.forEach((screen) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			select.disabled = true;
			input.disabled = true;
		});
		customCheckbox.forEach((checbox) => {
			checbox.disabled = true;
		});
	},

	/* ресет , сброс и обнуление инпутов */
	reset: function () {
		resetBtn.style.display = "none";
		startBtn.style.display = "block";
		screenPlus.disabled = false;
		range.disabled = false;

		/* разблокирую инпуты и слекторы */
		screens.forEach((screen, index) => {
			if (index > 0) {
				screen.remove(); // Удаление всех элементов кроме первого
			} else {
				const select = screen.querySelector("select");
				const input = screen.querySelector("input");
				select.disabled = false;
				input.disabled = false;
				input.value = "";
				select.value = "";
			}
		});

		customCheckbox.forEach((checbox) => {
			checbox.disabled = false;
			checbox.checked = false;
		});

		rangeInput.value = 0;
		rangeValue.textContent = 0;
		mainTotalCount.value = 0;
		totalCountOther.value = 0;
		totalFullCount.value = 0;
		totalCountRollback.value = 0;
		totalCountTotalInput.value = 0;
		this.title = "";
		this.screens = [];
		this.screenPrice = 0;
		this.adaptive = true;
		this.rollback = 0;
		this.servicePercentPrice = 0;
		this.servicePricesNumber = 0;
		this.servicePricesPersent = 0;
		this.servicesPercent = {};
		this.servicesNumber = {};
		this.fullPrice = 0;
	},

	init: function () {
		appData.addTitle();
		startBtn.addEventListener("click", this.start);
		screenPlus.addEventListener("click", this.addScreenBlock);
		rangeInput.addEventListener("input", () => {
			this.rollback = +rangeInput.value;
			rangeValue.textContent = this.rollback;
		});
		resetBtn.addEventListener("click", this.reset);
	},

	addTitle: function () {
		document.title = titleElement.textContent;
	},

	addServices: function () {
		otherItemsNum.forEach((item) => {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				this.servicesNumber[label.textContent] = +input.value;
			}
		});

		otherItemsProcent.forEach((item) => {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				this.servicesPercent[label.textContent] = +input.value;
			}
		});
	},

	addScreens: function () {
		screens = document.querySelectorAll(".screen");
		screens.forEach((screen, index) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			const selectName = select.options[select.selectedIndex].textContent;
			this.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
			});
		});
	},

	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true);
		screens = document.querySelectorAll(".screen");
		screens[screens.length - 1].after(cloneScreen);
	},

	addPrices: function () {
		for (let screen of this.screens) {
			this.screenPrice += +screen.price;
		}
		/* console.log(this); */
		/* общая цена  доп услуги */
		for (let key in this.servicesNumber) {
			this.servicePricesNumber += this.servicesNumber[key];
		}

		for (let key in this.servicesPercent) {
			this.servicePricesPersent += this.screenPrice * (this.servicesPercent[key] / 100);
		}

		this.fullPrice = this.screenPrice + this.servicePricesPersent + this.servicePricesNumber;

		this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * this.rollback) / 100);

		let totalInputSum = 0;
		screens.forEach((screen) => {
			const input = screen.querySelector("input");
			totalInputSum += +input.value;
		});
		this.totalInputSum = totalInputSum;
	},

	showResult: function () {
		/* console.log(this); */
		mainTotalCount.value = this.screenPrice;
		totalCountOther.value = this.servicePricesNumber + this.servicePricesPersent;
		totalFullCount.value = this.fullPrice;
		totalCountRollback.value = this.servicePercentPrice;
		totalCountTotalInput.value = this.totalInputSum;
	},

	/* 	logger: function () {
		for (let key in appData) {
			console.log(key + ": " + appData[key]);
		}
	}, */
};

/* вызов метода */
appData.init();
