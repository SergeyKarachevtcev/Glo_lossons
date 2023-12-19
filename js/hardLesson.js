const numers = 266219;

const numArray = numers.toString().split("").map(Number);

let numArraySumm = 1;

for (let i = 0; i < numArray.length; i++) {
	numArraySumm *= numArray[i];
}
console.log(numArraySumm);

const result = numArraySumm ** 3;
console.log(result);

console.log(String(result).slice(0, 2));

