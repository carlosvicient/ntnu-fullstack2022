//This will be a parameter

export default class RandomList extends HTMLElement {

    constructor() {
        super();
        this._initList();
        this.attachShadow({ mode: "open" });
        //We render the whole template the first time.
        this.shadowRoot.innerHTML = this._getTemplate();
        this._setEventListeners();
    }

    //connectedCallback() {
    //You will find examples online setting the listeners in the connectedCallback,
    //however, this method can be called multiple times during lifecycle of our element
    // e.g. drag and drop, etc. This might cause the event listener to be registered 
    // more than one time.
    //In this example, we will only render the whole template once (constructor)
    //therefore, we can set the eventListeners there
    //The following code is not needed here:
    //this._setEventListeners();
    //}

    //We use this to only render the "dynamic parts"
    render() {
        this.renderStaticList();
        this.renderRandomList();
        //if all the elements have been pulled, the button will be disabled
        if (this.setStaticList.length && this.listA.length === 0) {
            this.shadowRoot.getElementById("pullButton").disabled = true;
        }
    }

    renderStaticList() {
        //Not efficient, rendering the whole list each time
        this.shadowRoot.getElementById("originalList").innerHTML = this._getStaticList();
    }

    renderRandomList() {
        //Not efficient, rendering the whole list each time
        this.shadowRoot.getElementById("pulledList").innerHTML = this._getRandomList();
    }

    //check difference between setter as method and setter as "setter"
    setStaticList(list) {
        this._initList(list);
        this.render();
    }

    //check difference between setter as method and setter as "setter"
    set staticL(list) {
        this._initList(list);
        this.render();
    }

    _initList(list) {
        let listAux = list ? list : [];
        this.staticList = [...listAux];
        this.listA = [...listAux];
        this.listB = [];
    }

    _getTemplate() {
        return `
            ${this._getStyles()}
            <h2>Original list of elements</h2>
            <ul id="originalList">
                ${this._getStaticList()}
            </ul>

            <button id="pullButton">Pull Element</button>
            <button id="resetButton">Reset</button>

            <h2>Random elements removed from list</h2>
            <ol id="pulledList">
                ${this._getRandomList()}
            </ol>
        `;
    }

    _getStyles() {
        return `
            <style>
                :host {
                    display: block;
                    font-family: sans-serif;
                }

                #originalList li.status_strike {
                    text-decoration: line-through;
                }
            </style>
        `;
    }

    /**
     * Returns static list as HTML code (1 <li> per element)
     */
    _getStaticList() {
        return this.staticList.map((item) => {
            //if item is not in listA (undefined), 
            //it means it has already been pulled out.
            //IMPORTANT: this method won't work if there are repeated elements in the list
            const isItemNotPulled = this.listA.find((elem) => elem === item);
            const stringClass = isItemNotPulled ? '' : 'class="status_strike"';
            return `<li ${stringClass}>${item}</li>`;
        }).join('\n');
    }

    _getRandomList() {
        return this.listB.map((item) => {
            return `<li>${item}</li>`;
        }).join('\n');
    }

    _setEventListeners() {
        this.shadowRoot.getElementById("pullButton").addEventListener("click", (e) => {
            this._handlePullElement();
        });

        this.shadowRoot.getElementById("resetButton").addEventListener("click", (e) => {
            this._resetList();
        });
    }

    _handlePullElement() {
        const randomElem = this._pullRandomElementFromList();
        //Notice that we are re-rendering the entire list 
        // (this might not be efficient with large lists)
        if (!randomElem) return;
        this.render();
        this._fireChangeEvent(randomElem, this.listB);
    }

    _fireChangeEvent(element, list) {
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                randomList: [...list],
                newElement: `${element}`
            },
            bubbles: false
        }));
    }

    _pullRandomElementFromList() {
        if (!this.listA.length)
            return null;
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];
        this.listB.push(randomElem);
        return randomElem;
    }

    _resetList() {
        this._initList(this.staticList);
        this.shadowRoot.getElementById("pullButton").disabled = false;
        this.render();
        this._fireChangeEvent("", this.listB);
    }
}

customElements.define("random-list", RandomList);