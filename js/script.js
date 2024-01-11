
/* Восстановить порядок книг. */
const list = document.querySelectorAll(".book");
/* Заменить картинку заднего фона на другую из папки image */
const body = document.querySelector("body");
/* Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов") */
const bookTitle = list[4].querySelector("h2 a");
/* Удалить рекламу со страницы */
const advDelet = document.querySelector(".adv");
/* Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools) */
const itemsListFive = list[5].querySelectorAll("li");
const itemsListZero = list[0].querySelectorAll("li");
/* в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
const newChapter = document.createElement("li");
const itemsListTwo = list[2].querySelectorAll("li");




/* Восстановить порядок книг. */
list[0].before(list[1]);
list[0].after(list[4]);
list[4].after(list[3]);
list[5].after(list[2]);

/* Заменить картинку заднего фона на другую из папки image */
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

/* Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов") */
bookTitle.textContent = "Книга 3. this и Прототипы Объектов";

/* Удалить рекламу со страницы */
advDelet.remove();

/* Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools) */
itemsListFive[4].after(itemsListFive[2]);
itemsListFive[1].after(itemsListFive[9]);
itemsListFive[10].after(itemsListFive[5]);
itemsListFive[7].after(itemsListFive[5]);

itemsListZero[3].after(itemsListZero[6]);
itemsListZero[6].after(itemsListZero[8]);
itemsListZero[9].after(itemsListZero[2]);

/* в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
newChapter.textContent = "Глава 8: За пределами ES6";
list[2].querySelector("ul").appendChild(newChapter);
newChapter.after(itemsListTwo[9]);



console.log(list);
console.log(itemsListZero);
console.log(itemsListTwo);