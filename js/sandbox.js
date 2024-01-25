function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;

	this.createElement = function () {
		let element;
		if (this.selector.startsWith(".")) {
			element = document.createElement("div");
		} else if (this.selector.startsWith("#")) {
			element = document.createElement("p");
		}
		element.style.height = this.height;
		element.style.width = this.width;
		element.style.background = this.bg;
		element.style.fontSize = this.fontSize;
		element.textContent = "Любой текст";
		return element;
	};
}

const newElem = new DomElement(".block", "100px", "200px", "blue", "25px");

const container = document.getElementById("container");
container.appendChild(newElem.createElement());

console.log(newElem);
