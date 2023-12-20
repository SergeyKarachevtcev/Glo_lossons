const title = prompt("Как называется ваш проект?", "");
const screens = prompt("Какие типы экранов нужно разработать?", "Пример : Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const rollback = 75;

let adaptive = confirm("Нужен ли адаптив на сайте?");

const additionalServices = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice = +prompt("Сколько это будет стоить?", "пример: 12000");
const additionalServices02 = prompt("Какой дополнительный тип услуги нужен?");
const additionalServicesPrice02 = +prompt("Сколько это будет стоить?", "пример: 12000");

const fullPrice = screenPrice + additionalServicesPrice + additionalServicesPrice02;

const servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей." + " Стоимость разработки сайта " + fullPrice + " рублей.");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

if ((fullPrice) => 0 && fullPrice <= 15000) {
	console.log("Скидка не предусмотрена");
}
if (fullPrice > 15000 && fullPrice <= 30000) {
	console.log("Даем скидку в 5%");
}
if (fullPrice < 0) {
	console.log("Что то пошло не так");
} else {
	console.log("Даем скидку в 10%");
}
