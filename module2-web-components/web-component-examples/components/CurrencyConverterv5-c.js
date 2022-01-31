/**
 * This component will show NOKs and present the equivalent value in euros
 */
export default class CurrencyConverter extends HTMLElement {
    constructor() {
        super();
        //New: we store the shadowRoot as a class property to use it
        // from other methods (use name different than shadowRoot)
        this.shadowObj = this.attachShadow({ mode: 'open' });

        //we will update the shadowRoot in the render method
        //this.shadowRoot.appendChild(getTemplate());

        this._nok = this.getAttribute('nok') || 10; //10 default value if nok does not exist
        console.log("The nok attribute is stored as a property. Value: ", this._nok);

        this.render();
    }

    static get observedAttributes() {
        return ["nok"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //Stop the execution if it is the same value
        if (oldValue === newValue) return;

        //stop the execution if the changed attribut is not "nok" 
        // (this won't happen because we are only observing that attribute...)
        if (name !== "nok") return;

        this._nok = newValue;

        // Lets re-render the component after getting the new attribute
        this.render();
    }

    render() {
        this.shadowObj.innerHTML = this._getTemplate();
    }

    _getTemplate() {
        //const template = document.createElement('template');
        const template = `
            <style>
                #converter {
                    display: inline-block;
                    margin: 1em; 
                    padding: 0.5em;
                    border-radius: 1em;
                    background-color: black;
                    color: white;
                }
    
                #value {
                    font-size: 2em;
                }
    
                #currency {
                    font-size: 0.5em;
                }
    
                #eur {
                    font-size: 0.5em;
                    text-align: center;
                    position: relative;
                    top: -1em;
                }
            </style>
            <div id="converter">
                <div>
                    <span id="value">${this._nok}</span>
                    <span id="currency">NOK</span>
                </div>
                <div id="eur">
                    (<span>${nok2Eur(this._nok)}</span>
                    <span>EUR</span>)
                </div>
            </div>
        `;

        return template;
    }
}

//Exchange rate hard-coded for academic purpose
//(optional) fetch exchange rates from web service
const euroExchangeRate = 10.32; //1EUR = 10.32NOK

function nok2Eur(nok) {
    let euros = nok / euroExchangeRate;
    //round 2 decimals if needed
    return Math.round(euros * 100 + Number.EPSILON) / 100
}

function eur2Nok(eur) {
    let nok = eur * euroExchangeRate;
    return Math.round(nok * 100 + Number.EPSILON) / 100

}

window.customElements.define('currency-converter', CurrencyConverter);