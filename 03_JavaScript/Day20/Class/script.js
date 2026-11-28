class Student{
    name;
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    printMarks(){
        console.log(`\nName: ${this.name}`)
        console.log(`Marks: ${this.marks}`);
    }
};

let s1 = new Student("Yuvraj", 180);
let s2 = new Student("Pari", 190);


console.log(`Student Objects Data: `);
s1.printMarks();
s2.printMarks();

//hasOwnProperty -> Varibles and methods

console.log(`\nStudent Objects hasOwnProperty: `);
console.log(`1. Data memeber (name) -> ${s1.hasOwnProperty("name")}`);
console.log(`2. Memeber Function (printMarks) -> ${s1.hasOwnProperty("printMarks")}`);

console.log(`\nStudent Class hasOwnProperty: `);
console.log(`1. Data memeber (name) -> ${Student.prototype.hasOwnProperty("name")}`);
console.log(`2. Memeber Function (printMarks) -> ${Student.prototype.hasOwnProperty("printMarks")}`);