let numers = 266219;

let numArray = numers.toString().split("").map(Number);


let numArraySumm = 1;

for (let i = 0; i < numArray.length; i++) {
	numArraySumm *= numArray[i];
}


let result = numArraySumm * numArraySumm * numArraySumm;
console.log(result);

console.log(String(result).slice(0, 2));

