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