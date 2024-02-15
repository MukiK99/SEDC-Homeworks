class Animal {
    constructor(name,type,age,size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(input){
        if(input instanceof Animal){
            if(this.type === "herbivore"){
                console.log(`The ${this.name} is a herbivore and does not eat other animals!`);
            }
            if(this.type !== "herbivore"){
                input.isEaten = true;
                console.log(`The ${this.name} ate the ${input.name}`);
                if(input.size > this.size){
                    console.log(`The ${this.name} tried to eat the ${input.name}, but it was too large!`);
                }
            }
        }
        else {
            console.log(`The ${this.name} is eating the ${input.name}`);
        }
    }
}



class Carnivore extends Animal {
    constructor(name,type,age,size){
        super(name,type,age,size);
    }
}

class Herbivore extends Animal {
    constructor(name,type,age,size){
        super(name,type,age,size);
    }
}

class Omnivore extends Animal {
    constructor(name,type,age,size){
        super(name,type,age,size);
    }
}

class Flower {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
}

let wolf = new Carnivore('wolf','carnivore',8,38);
let elephant = new Herbivore('elephant','herbivore',14,2500);
let bear = new Omnivore('bear','omnivore',29,800);
let goat = new Herbivore('goat','herbivore',2,20);
let rose = new Flower('rose','red');

let lion = new Animal('lion',"carnivore",14,250);
lion.eat(wolf);