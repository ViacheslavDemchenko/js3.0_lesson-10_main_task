class Options {

	constructor(height, width, bg, fontSize, textAlign, textContent) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.textContent = textContent;
	}
	createElement() {
		let div = document.createElement('div'),
			parent = document.body;
			div.textContent = this.textContent;
			div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
			parent.appendChild(div);
	}
}

const element = new Options('200px', '300px', '#a35ddc', '20px', 'center', 'Hello world!');
element.createElement();

