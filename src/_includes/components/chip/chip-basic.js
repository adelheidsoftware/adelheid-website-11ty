class BasicChip extends HTMLElement {

	constructor() {
		super();

		let template = document.getElementById("chip-basic");
		let templateContent = template.content;
		
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(templateContent.cloneNode(true));
	}

	connectedCallback() {
		const shadow = this.shadowRoot;
		let label = shadow.querySelector(".label");
		let link = shadow.querySelector(".link");

		let labelText = this.getAttribute("data-label");
		let href = this.getAttribute("data-href");

		label.textContent = labelText;
		link.href = href;
	}

	disconnectedCallback() {
	}

	adoptedCallback() {
	}

	attributeChangedCallback(name, oldValue, newValue) {
	}

}

customElements.define("chip-basic", BasicChip);