"use strict";
let lang = prompt("Какой язык у сайта ?", "пример: ru или en");
const ruLang = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const enLang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const wrongAnswer = "что то пошло не так";

if (lang === "ru") {
	console.log(ruLang);
}
if (lang === "en") {
	console.log(enLang);
} else {
	console.log(wrongAnswer);
}

switch (lang) {
	case "ru":
		console.log(ruLang);
		break;
	case "en":
		console.log(enLang);
		break;
	default:
		console.log(wrongAnswer);
}

let langIndex = lang === "ru" ? 0 : lang === "en" ? 1 : -1;
let daysOfWeek = langIndex === 0 ? ruLang : langIndex === 1 ? enLang : wrongAnswer;

console.log(daysOfWeek);

const namePerson = prompt("Как ваше имя?", "");
const director = "директор";
const ticher = "преподаватель";

let role = namePerson === "Артем" ? director : namePerson === ticher ? "преподаватель" : wrongAnswer;
console.log(role);


const weekDays = {
	lang1: ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
	lang2: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
let weekLang = prompt("Какой язык у сайта ?", "пример: ru или en");

let selectedLang = weekLang === "ru" ? weekDays.lang1 : weekLang === "en" ? weekDays.lang2 : wrongAnswer;

console.log(selectedLang);



