class Dog {
    constructor(name,kind){
        this.name = name;
        this.kind = kind;
    }
    speak(sentence){
        console.log(`Dog says: ${sentence}`);
        alert(`Dog says: ${sentence}`);
    }
}

let input = prompt("What is the dog saying?")
let dog = new Dog('Drogon','Pit Bull');
dog.speak(input);
