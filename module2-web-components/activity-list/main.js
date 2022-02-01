class ListRender extends HTMLElement {
    constructor(){
        super();
        var list = ["valnøtt", "hasselnøtt", "mandel"];
        var ul = document.createElement('ul');
        
        list.forEach(element => {
            var li = document.createElement('li');
            li.innerHTML = `<li>${element}</li>`;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    }
}

window.customElements.define('list-render', ListRender);