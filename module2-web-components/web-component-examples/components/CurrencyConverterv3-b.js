class CurrencyConverter extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({ mode: 'open' });
        //Option b) the template is stored inside the component (JS)
        shadowRoot.appendChild(getTemplate());
    }
}

//this could be replaced by shadowRoot.innerHTM...
function getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            #value {
                font-size: 2em;
            }

            #currency {
                font-size: 0.5em;
            }
        </style>
        <div>
            <span id="value">10</span>
            <span id="currency">NOK</span>
        </div>
    `;

    //we return a copy of the template. The template is 
    //created everytime the function is called, so we don't
    //need to clone it, but if we use templates from other places (HTML, eg)
    //then it is required
    return template.content.cloneNode(true)
}

window.customElements.define('currency-converter', CurrencyConverter);