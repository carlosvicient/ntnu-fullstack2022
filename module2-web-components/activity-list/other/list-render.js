export default class ListRender extends HTMLElement {

    list = ["valnøtt", "hasselnøtt", "mandel"];

    constructor() {
        super();

        this.shadowObj = this.attachShadow({ mode: 'open' });
        this.shadowObj.innerHTML = 'Hello, I am List Render';

        this.print();
    }

    print(){
        const ul = document.createElement('ul');

        this.list.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = `<li>${element}</li>`;
            ul.appendChild(li);
        });

        //shadowRoot.append(ul);
        this.shadowObj.innerHTML = "";
        this.shadowObj.append(ul);
    }
}

window.customElements.define('list-render', ListRender);