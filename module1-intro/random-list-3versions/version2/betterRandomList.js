class BetterRandomList {
    constructor(staticList){
        this.staticList = staticList;
        this.listA = [...staticList];
        this.listB = [];
    }

    getRandomElementFromList(){
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        return this.listA[randomIndex];
    }

    pullRandomElementFromList(){
        if(!this.listA.length){
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];
        this.listB.push(randomElem);
        return randomElem;
    }

    resetList(){
        this.listA = [...this.staticList];
        this.listB = [];
    }

    log(){
        console.log("Static list: ", this.staticList.toString());
        console.log("List A: ", this.listA.toString());
        console.log("List B: ", this.listB.toString());
    }
}

// const myList = ["apple", "pineapple", "pen"];
// const betterRandomList = new BetterRandomList(myList);

// //Ex 1
// const randomElement = betterRandomList.getRandomElementFromList();
// console.log("Randon elem: ", randomElement);
// betterRandomList.log();

// //Ex 2
// const randomElement2 = betterRandomList.pullRandomElementFromList();
// console.log("Randon elem2: ", randomElement2);
// betterRandomList.log();

// const randomElement3 = betterRandomList.pullRandomElementFromList();
// console.log("Randon elem3: ", randomElement3);
// betterRandomList.log();

// const randomElement4 = betterRandomList.pullRandomElementFromList();
// console.log("Randon elem4: ", randomElement4);
// betterRandomList.log();

// const randomElement5 = betterRandomList.pullRandomElementFromList();
// console.log("Randon elem5: ", randomElement5);
// betterRandomList.log();
