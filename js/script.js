const titleElement = document.getElementsByTagName("h1")[0];
console.log(titleElement);

const handlerBtn = document.getElementsByClassName("handler_btn");
const printHandlerBtn = handlerBtn[0]; // Access the first button
const cancellHandlerBtn = handlerBtn[1]; // Access the second button

console.log(printHandlerBtn);
console.log(cancellHandlerBtn);

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
const mainTotalCount = totalInput[0];
const totalCountTotalInput = totalInput[1];
const totalCountOther = totalInput[2];
const totalFullCount = totalInput[3];
const totalCountRollback = totalInput[4];

console.log(mainTotalCount, totalCountTotalInput, totalCountOther, totalFullCount, totalCountRollback);



let screen = document.querySelectorAll(".screen");
console.log(screen);
