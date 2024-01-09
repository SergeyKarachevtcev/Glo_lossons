const titleElement = document.getElementsByTagName("h1")[0];
console.log(titleElement);

const handlerBtn = document.getElementsByClassName("handler_btn");
console.log(handlerBtn[0]);
console.log(handlerBtn[1]);

const screenBtn = document.querySelector(".screen-btn");
console.log(screenBtn);

const otherItemsNum = document.querySelectorAll(".other-items.number");
console.log(otherItemsNum);

const otherItemsProcent = document.querySelectorAll(".other-items.percent");
console.log(otherItemsProcent);

const rangeInput = document.querySelector('.rollback input[type="range"]');
console.log(rangeInput);

const rangeValue = document.querySelector(".rollback .range-value");
console.log(rangeValue);

const totalInput = document.getElementsByClassName("total-input");
const totalInputElements = [];
for (let i = 0; i < totalInput.length; i++) {
	totalInputElements.push(totalInput[i]);
}
console.log(totalInputElements);

let screen = document.querySelectorAll(".screen");
console.log(screen);
