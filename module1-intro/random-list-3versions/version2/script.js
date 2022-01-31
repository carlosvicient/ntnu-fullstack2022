/**
 * Iterates the "stringList" and creates a <li> for each element.
 * The element is added to the list with the id "originalList".
 * @param [] stringList 
 */
function populateStaticList(list){
    const ul = document.getElementById("originalList");
    list.forEach(elem => {
        ul.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
    });
}

/**
 * The elem is added as a <li> at the end of the list with "pulledList" id.
 * @param elem 
 */
function addElementToPulledList(elem){
    const ul = document.getElementById("pulledList");
    ul.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
}

function pullElement(){
    const randomElem = betterRandomList.pullRandomElementFromList();
    if(!randomElem) return;
    addElementToPulledList(randomElem);
}

function resetList(){
    betterRandomList.resetList();
    const ul = document.getElementById("pulledList");
    ul.innerHTML = "";
}

const myList = ["apple", "pineapple", "pen"];
const betterRandomList = new BetterRandomList(myList);
populateStaticList(betterRandomList.staticList);

