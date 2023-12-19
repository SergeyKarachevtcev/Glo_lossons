
const title = "JS GLO_Lessons";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 47;
const rollback = 75;
const fullPrice = 40000;
const adaptive = true;



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей / долларов / гривен / юани." + " Стоимость разработки сайта " + fullPrice + " рублей/ долларов/ гривен/ юани.");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

