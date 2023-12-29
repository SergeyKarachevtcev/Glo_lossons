function gameBot() {
	const randomNumber = 17;

	function guessNumber() {
		const userNumber = prompt("Угадай число от 1 до 100:", "");

		if (userNumber === null) {
			alert("Игра окончена");
			return;
		}

		if (!isNumber(userNumber)) {
			alert("Введи число!");
			guessNumber();
			return;
		}

		if (userNumber < randomNumber) {
			alert("Загаданное число больше");
			guessNumber();
		} else if (userNumber > randomNumber) {
			alert("Загаданное число меньше");
			guessNumber();
		} else {
			alert("Поздравляю, Вы угадали!!!");
		}
	}

	guessNumber();
}

function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

gameBot();
