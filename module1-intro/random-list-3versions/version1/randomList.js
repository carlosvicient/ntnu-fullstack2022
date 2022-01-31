const stringList = ["apple", "pineapple", "pen"];

/**
 * Returns a random element from the list. The element is not removed from the list.
 * @param [] list 
 */
function getRandomElementFromList(list){
    //Math.random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //Math.floor https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomElement = list[randomIndex];
    return randomElement;
}

/**
 * Returns a random element from the list. The element is then removed from the list.
 * @param {*} list 
 */
function getRandomElementFromListAndRemove(list){
    //Several ways of removing elements from list. E.g.: Array.prototy.splice
    const randomIndex = Math.floor(Math.random() * list.length);
    return list.splice(randomIndex, 1);
}

/**
 * Iterates the "stringList" and creates a <li> for each element.
 * The element is added to the list with the id "originalList".
 * @param [] stringList 
 */
function populateStaticList(stringList){
    const ul = document.getElementById("originalList");
    stringList.forEach(elem => {
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
    const randomElem = getRandomElementFromListAndRemove(stringList) 
    if(randomElem && randomElem.length) addElementToPulledList(randomElem);
    
}

function resetList(){
    const ul = document.getElementById("pulledList");
    ul.innerHTML = "";
}

populateStaticList(stringList);

//Example 1
// console.log("Example 1");
// console.log("Original List:");
// console.log(stringList);
// console.log("Random element: ", getRandomElementFromList(stringList));
// console.log("Original List after getRandomElementFromList:");
// console.log(stringList);

//Example 2
// console.log("Example 2");
// console.log("Original List:");
// console.log(stringList);
// const randomElem = getRandomElementFromListAndRemove(stringList);
// addElementToPulledList(randomElem);
// console.log("Random element: ", randomElem);
// console.log("Original List after getRandomElementFromList:");
// console.log(stringList);
