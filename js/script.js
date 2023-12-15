
let title = "JS GLO_Lessons";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 47;
let rollback = 75;
let fullPrice = 40000;
let adaptive = true;



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей / долларов / гривен / юани." + " Стоимость разработки сайта " + fullPrice + " рублей/ долларов/ гривен/ юани.");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

