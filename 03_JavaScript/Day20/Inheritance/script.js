class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    printAnimal(){
        console.log(`\nAnimal Type: ${this.type}\nLegs Count: ${this.legs}`);
    }
}

class Dog extends Animal{
    constructor(name, type, legs){
        super(type, legs);
        this.name = name;
    }

    printName(){
        super.printAnimal();
        console.log(`Dog Name: ${this.name}`);
    }
}

let d1 = new Dog("Tommy", "Carnivorus", 4);
let d2 = new Dog("Cartt", "Carnivorus", 4);

d1.printName();
d2.printName();