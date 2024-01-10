const list = document.querySelectorAll(".book");
console.log(list);
list[0].before(list[1]);
list[0].after(list[4]);
list[4].after(list[3]);
list[5].after(list[2]);


/* Заменить картинку заднего фона на другую из папки image */
const body = document.querySelector("body");
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

/* Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов") */
const bookTitle = list[4].querySelector("h2 a");
bookTitle.textContent = "Книга 3. this и Прототипы Объектов";

/* Удалить рекламу со страницы */
const advDelet = document.querySelector(".adv");
advDelet.remove();

/* Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools) */
const itemsListFive = list[5].querySelectorAll("li");
console.log(itemsListFive);
itemsListFive[4].after(itemsListFive[2]);
itemsListFive[1].after(itemsListFive[9]);
itemsListFive[10].after(itemsListFive[5]);

const itemsListZero = list[0].querySelectorAll("li");
console.log(itemsListZero);
itemsListZero[3].after(itemsListZero[6]);
itemsListZero[6].after(itemsListZero[8]);

/* в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";
list[2].querySelector("ul").appendChild(newChapter);

const itemsListTwo = list[2].querySelectorAll("li");
console.log(itemsListTwo);
itemsListTwo[8].after(itemsListTwo[10]);
