let str = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Original Array: ${str}`);

str.shift();
console.log(`\n1. Remove First element: ${str}`);

str.splice(1,1,"OLA");
console.log(`\n2. Replace Uber With OLA: ${str}`);

str.push("Amazon");
console.log(`\n3. Insert Amazon: ${str}`);