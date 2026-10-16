let arr = [10,20,40,69];
console.log(`Array Original: ${arr}`);

//1. Shallow Copy
console.log(`\n1. Shallow Copy: `);
let brr = arr;
brr[0] = true;

console.log(`Original Array: ${arr}`);
console.log(`Copyied Array: ${brr}`);


//2. Deep Copy
console.log(`\n2. Deep Copy: `);
let crr = [...arr];
crr[0] = 112;

console.log(`Original Array: ${arr}`);
console.log(`Copyied Array: ${crr}`);