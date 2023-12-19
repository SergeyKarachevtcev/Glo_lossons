"use strict";
let lang = confirm("Язык сайта русский?");
if (lang === true) {
	console.log("понедельник, вторник , среда , черверг , пятница , суббота , воскресенье");
} else {
	console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday , Sunday");
}

switch (lang) {
	case true:
		console.log("понедельник, вторник , среда , черверг , пятница , суббота , воскресенье");
		break;
	case false:
		console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday , Sunday");
		break;
}

const daysOfWeek = [
	["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
	["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
];

console.log(daysOfWeek[lang ? 0 : 1]);

const namePerson = prompt("Как ваше имя?" , "");
let role = namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент";

console.log(role);
