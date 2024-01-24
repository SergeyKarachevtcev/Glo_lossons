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

	start: () => {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		/* appData.logger(); */
		console.log(appData);
		appData.showResult();
	},
	startReset: () => {
		/* запуск функции  отключения кнопок*/
		startBtn.addEventListener("click", appData.disableCustomCheckboxes);
		/* старт функции отключения кпоки и создания копки отмены */
		startBtn.addEventListener("click", appData.handleClickStart);
		/* запуск функции reset */
		resetBtn.addEventListener("click", appData.handleClickReset);
	},
	/* функция отключения кнопок */
	disableCustomCheckboxes: () => {
		range.disabled = true;
		/* инпуты и селекты блокирую */
		screensInput = document.querySelectorAll(".main-controls input[type=text]");
		screensInput.forEach(screen => {
			screen.disabled = true;
		});
		viewsSelect = document.querySelectorAll(".views-select");
		viewsSelect.forEach(select => {
			select.disabled = true;
		});
		/* инпуты и селекты блокирую */
		screenPlus.disabled = true;
		customCheckbox.forEach(checkbox => {
			checkbox.disabled = true;
		});
	},
	/* функция отключения кпоки и создания копки отмены */
	handleClickStart: () => {
		startBtn.style.display = "none";
		resetBtn.style.display = "block";
	},
	/* функция reset */
	handleClickReset: () => {
		resetBtn.style.display = "none";
		startBtn.style.display = "block";
		screenPlus.disabled = false;
		range.disabled = false;
		/* инпуты и селекты разблокирую */
		screensInput = document.querySelectorAll(".main-controls input[type=text]");
		screensInput.forEach(screen => {
			screen.disabled = false;
		});
		viewsSelect = document.querySelectorAll(".views-select");
		viewsSelect.forEach(select => {
			select.disabled = false;
		});
		/* инпуты и селекты разблокирую */
		customCheckbox.forEach(checkbox => {
			checkbox.disabled = false;
			checkbox.checked = false;
		});
		rangeInput.value = 0;
		rangeValue.textContent = 0;
		mainTotalCount.value = 0;
		totalCountOther.value = 0;
		totalFullCount.value = 0;
		totalCountRollback.value = 0;
		totalCountTotalInput.value = 0;
		appData.title = "";
		appData.screens = [];
		appData.screenPrice = 0;
		appData.adaptive = true;
		appData.rollback = 0;
		appData.servicePercentPrice = 0;
		appData.servicePricesNumber = 0;
		appData.servicePricesPersent = 0;
		appData.servicesPercent = {};
		appData.servicesNumber = {};
		appData.fullPrice = 0;
		// привожу к исходному значению инпут
		viewsSelect.forEach(select => {
			select.selectedIndex = 0;
		});
		// привожу к нулю значение инпута
		screensInput.forEach(screen => {
			screen.value = 0;
		});
		// нахожу все элементы screen
		screens = document.querySelectorAll(".screen");
		// Удаление всех элементов, кроме первого
		if (screens.length > 1) {
			for (let i = 1; i < screens.length; i++) {
				screens[i].remove();
			}
		}
	},

	

	init:  () => {
		appData.addTitle();
		startBtn.addEventListener("click", appData.start);
		screenPlus.addEventListener("click", appData.addScreenBlock);
		startBtn.disabled = true;
		screens.forEach( (screen) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			select.addEventListener("change", validateInputs);
			input.addEventListener("input", validateInputs);
		});
		rangeInput.addEventListener("input",  () => {
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
			startBtn.disabled = !allInputsFilled;
		}
	},

	addTitle:  () => {
		document.title = titleElement.textContent;
	},

	addServices:  () => {
		otherItemsNum.forEach(function (item) {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value;
			}
		});

		otherItemsProcent.forEach( (item) => {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value;
			}
		});
	},

	addScreens:  () => {
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

	addScreenBlock:  () => {
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen);
	},

	addPrices:  () => {
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
		screens.forEach( (screen) => {
			const input = screen.querySelector("input");
			totalInputSum += +input.value;
		});
		appData.totalInputSum = totalInputSum;
	},

	showResult:  () => {
		mainTotalCount.value = appData.screenPrice;
		totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPersent;
		totalFullCount.value = appData.fullPrice;
		totalCountRollback.value = appData.servicePercentPrice;
		totalCountTotalInput.value = appData.totalInputSum;
	},

	logger:  () => {
		for (let key in appData) {
			console.log(key + ": " + appData[key]);
		}
	},
};

/* вызов метода */
appData.startReset();
appData.init();
