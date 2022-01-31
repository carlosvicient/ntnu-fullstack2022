/**
 * This component will show NOKs and present the equivalent value in euros
 */
export default class CurrencyConverter extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(getTemplate());

        this._nok = this.getAttribute('nok') || 10; //10 default value if nok does not exist
        console.log("The nok attribute is stored as a property. Value: ", this._nok);
    }
}

//Exchange rate hard-coded for academic purpose
//(optional) fetch exchange rates from web service
const euroExchangeRate = 10.32; //1EUR = 10.32NOK

function getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            #converter {
                display: inline-block;    
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
                <span id="value">10</span>
                <span id="currency">NOK</span>
            </div>
            <div id="eur">
                (<span>0.97</span>
                <span>EUR</span>)
            </div>
        </div>
    `;

    //we return a copy of the template. The template is 
    //created everytime the function is called, so we don't
    //need to clone it, but if we use templates from other places (HTML, eg)
    //then it is required
    return template.content.cloneNode(true)
}

function nok2Eur(nok){
    return nok/euroExchangeRate;
}

function eur2Nok(eur){
    return eur*euroExchangeRate;
}

window.customElements.define('currency-converter', CurrencyConverter);