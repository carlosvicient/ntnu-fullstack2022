import { html, css, LitElement } from 'lit';

export class RandomListv6 extends LitElement {
    static get properties() {
        return {
            _staticList: { type: Array },
            _listB: { type: Array },
            _listA: { type: Array },
        };
    }

    static get styles() {
        return css `
			:host {
				display: block;
				font-family: sans-serif;
				margin: 5em;
			}

			#originalList li.status_strike {
                text-decoration: line-through;
                color: red;
			}
		`;
    }

    constructor() {
        super();
        this.setStaticList(this.getAttribute('list') || []);
    }

    set staticList(list) {
        this.setStaticList(list);
    }

    setStaticList(list) {
        let _listAux = list ? list : [];
        this._staticList = [..._listAux];
        this._listA = [..._listAux];
        this._listB = [];
    }

    handlePullBtn(e) {
        if (!this._listA.length) return null;
        const randomIndex = Math.floor(Math.random() * this._listA.length);
        const randomElem = this._listA.splice(randomIndex, 1)[0];
        this._listB = this._listB.concat(randomElem);

        if (this._staticList.length && this._listA.length === 0) {
            e.target.disabled = true;
        }
    }

    handleResetBtn(e) {
        this.setStaticList(this._staticList);
        //option 1: removing the html attribute
        //this.shadowRoot.getElementById("pull").removeAttribute("disabled");
        //optin 2: setting disabled to false (notice this would not work with html code <button disabled="false">)
        //this.shadowRoot.getElementById("pull").disabled = false;
        //option 3: 
        e.target.previousElementSibling.disabled = false;
    }

    staticListTemplate() {
        return this._staticList.map((item) => {
            const isItemNotPulled = this._listA.find((elem) => elem === item);
            const stringClass = isItemNotPulled ? '' : 'status_strike';
            return html `<li class="${stringClass}">${item}</li>`;
        })
    }

    render() {
            return html `<h2>Original list</h2>
			<ul id="originalList">
				${this.staticListTemplate()}
			</ul>

			<button @click="${this.handlePullBtn}">Pull element</button>
			<button @click="${this.handleResetBtn}">Reset</button>

			<h2>Random element removed from list</h2>
			<ol>
				${this._listB.map((item) => html`<li>${item}</li>`)}
			</ol> `;
  }
}