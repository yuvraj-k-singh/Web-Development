/* Primitive DataTypes */

//1. Number
let x = 112;
let y = 826946.38727;
console.log(`Number value 1 is ${x} , value 2 is ${y}`);
console.log("Type of x and y: "+typeof x)
console.log();

//2. BigInt
let big = Number.MAX_SAFE_INTEGER;
console.log("Max Number value: "+big);
let bigInt = 3828837737230n;
console.log("bigInt value: "+bigInt);
console.log("Type of bigInt: "+typeof bigInt);
console.log();

//3. Boolean
let isAllowed = false;
console.log("Value of isAllowed: "+isAllowed);
console.log("Type of isAllowed: "+typeof isAllowed);
console.log();

//4. Null
let val = null;
console.log(`Value of val: ${val}`);
console.log(`Type of val: ${typeof val}`);
console.log();

//5. Undefined
let pari;
console.log(`Value of pari: ${pari}`);
console.log(`Type of val: ${typeof pari}`);
console.log();

//6. String
let fName = "Yuvraj";
let lName = 'Kumar Singh';
console.log(`Value of fName: ${fName} and lName: ${lName}`);
console.log(`Type of fName: ${typeof fName}`);
console.log();


//7. Symbol
let college = Symbol("IIST");
console.log(`Value of College: ${college.toString()}`);
console.log(`Type of College: ${typeof college}`);
console.log();


/* Non-Primitive DataType */

//1. Array
let arr = [1,2,"Yuvraj", true, false, "Pari"];
console.log("Array elements: "+arr);
console.log("Type of Arr: "+typeof arr);
console.log();

//2. Object
let student = {
    name: "Yuvraj Kumar Singh",
    section: "CS-5",
    e_No: "0818CS241389",
    cgpa: 8.28
};

console.log("Student Details: ");
console.log(student);
console.log(`Student name: ${student.name}`);
console.log("Type of Student: "+typeof student);
console.log();


//3. Function
function greet() {
    console.log("Hello from function!");
}
greet();
console.log("Type of function: "+ typeof greet);