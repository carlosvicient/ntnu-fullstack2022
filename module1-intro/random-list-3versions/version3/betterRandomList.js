class BetterRandomList {
    constructor(staticList, root) {
        this.staticList = staticList;
        this.listA = [...staticList];
        this.listB = [];
        this.root = root;
        this._renderTemplate();
        this._populateStaticList();
    }

    getRandomElementFromList() {
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        return this.listA[randomIndex];
    }

    pullRandomElementFromList() {
        if (!this.listA.length) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];
        this.listB.push(randomElem);
        return randomElem;
    }

    resetList() {
        this.listA = [...this.staticList];
        this.listB = [];
        const ul = document.getElementById("pulledList");
        ul.innerHTML = "";
    }

    log() {
        console.log("Static list: ", this.staticList.toString());
        console.log("List A: ", this.listA.toString());
        console.log("List B: ", this.listB.toString());
    }

    _renderTemplate() {
        const template = `
            <h2>Original list of elements</h2>
            <ul id="originalList"></ul>

            <button onclick="pullElement()">Pull Element</button>
            <button onclick="resetList()">Reset</button>

            <h2>Random elements removed from list</h2>
            <ol id="pulledList"></ul>
        `;
        this.root.insertAdjacentHTML('beforeend', template)
    }

    _populateStaticList() {
        //cannot search by ID inside the root (DOM)
        const ul = document.getElementById("originalList");
        this.staticList.forEach(elem => {
            ul.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
        });
    }

    _addElementToPulledList(elem) {
        const ul = document.getElementById("pulledList");
        ul.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
    }

    pullElement() {
        const randomElem = this.pullRandomElementFromList();
        if (!randomElem) return;
        this._addElementToPulledList(randomElem);
    }
}