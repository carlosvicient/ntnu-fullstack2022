const container = document.getElementById("list-container");
const myList = ["apple", "pineapple", "pen"];
const betterRandomList = new BetterRandomList(myList, container);

function pullElement(){
    betterRandomList.pullElement();
}

function resetList(){
    betterRandomList.resetList();
}

const container2 = document.getElementById("list-container2");
const myList2 = ["papple", "ppineapple", "ppen"];
const betterRandomList2 = new BetterRandomList(myList2, container2);
