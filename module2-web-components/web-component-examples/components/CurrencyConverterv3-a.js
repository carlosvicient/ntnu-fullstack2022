class CurrencyConverter extends HTMLElement {
    constructor() {
        super();

        //Option a) the template is in the html file
        const template = document.getElementById('currency-template');
        const templateContent = template.content;

        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
window.customElements.define('currency-converter', CurrencyConverter);