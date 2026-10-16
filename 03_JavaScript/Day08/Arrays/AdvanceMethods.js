let arr = [10,20,40,50,55,3,5,6,4];

//1. Slice Method
console.log(`1. Slice Method: `);
let brr = arr.slice();
console.log(`Arr: ${arr}`);
console.log(`Brr: ${brr}`);
let crr = arr.slice(2,5);
console.log(`Crr: ${crr}`);

//2. To String
let str = arr.toString();
console.log(`\n2. To String: `);
console.log(`String value: ${str}`);
console.log(`TypeOf : ${typeof str}`);