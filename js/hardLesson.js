"use strict";

const getData = function (data) {
	if (typeof data !== "string") {
		console.log("Аргумент должен быть строкой");
		return;
	} else {
		data = data.trim();
		if (data.length > 30) {
			data = data.slice(0, 30) + "....";
		}
		return data;
	}
};

console.log(getData("   ghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtnghbdtn    "));
