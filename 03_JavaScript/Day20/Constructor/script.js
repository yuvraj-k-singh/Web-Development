class Student{
    constructor(name){
        console.log(`\nConstructor Called!`);
        this.name = name;
    }

    print(){
        console.log(`Method Called`);
        console.log(`Name: ${this.name}`);
    }
}

let s1 = new Student("Yuvraj");
s1.print();

let s2 = new Student("Pari");
s2.print();