
class CurrencyConverter extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = "I will convert NOK to EUR but not yet...";
    }
}
window.customElements.define('currency-converter', CurrencyConverter);