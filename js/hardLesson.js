"use strict";
let lang = prompt("Какой язык у сайта ?", "пример: ru или en");
const ruLang = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const enLang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const wrongLang = "что то пошло не так";

if (lang === "ru") {
	console.log(ruLang);
}
if (lang === "en") {
	console.log(enLang);
} else {
	console.log(wrongLang);
}

switch (lang) {
	case "ru":
		console.log(ruLang);
		break;
	case "en":
		console.log(enLang);
		break;
	default:
		console.log(wrongLang);
}

let langIndex = lang === "ru" ? 0 : lang === "en" ? 1 : -1;
let daysOfWeek = langIndex === 0 ? ruLang : langIndex === 1 ? enLang : wrongLang;

console.log(daysOfWeek);

const namePerson = prompt("Как ваше имя?", "");
let role = namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент";

console.log(role);
