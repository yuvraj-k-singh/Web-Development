class Vehicle{
    constructor(name, wheels, speed){
        this.name = name;
        this.wheels = wheels;
        this.speed = speed;
    }

    print(){
        console.log(`\nName: ${this.name}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Speed: ${this.speed}`)
    }
}

let car = new Vehicle("car", 4, 120);
let truck = new Vehicle("Truck", 12, 180);

car.print();
truck.print();