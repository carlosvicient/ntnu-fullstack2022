
class CurrencyConverter extends HTMLElement {
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = "I will convert NOK to EUR but not yet...";
    }
}
window.customElements.define('currency-converter', CurrencyConverter);