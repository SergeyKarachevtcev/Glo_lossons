function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;

	this.createElement = function () {
		let element;
		if (this.selector.startsWith(".")) {
			const className = this.selector.slice(1);
			element = document.createElement("div");
			element.classList.add(className);
		} else if (this.selector.startsWith("#")) {
			element = document.createElement("p");
			element.id = this.selector.slice(1);
		}
		element.style.height = this.height;
		element.style.width = this.width;
		element.style.background = this.bg;
		element.style.fontSize = this.fontSize;
		element.textContent = "Любой текст";
		document.body.appendChild(element);
	};
}

const newElem = new DomElement("#block", "100px", "200px", "blue", "25px");

newElem.createElement();

console.log(newElem);
