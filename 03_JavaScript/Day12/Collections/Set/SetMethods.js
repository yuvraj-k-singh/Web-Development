let set = new Set();

//1. Add elements
set.add(10);
set.add(15);
set.add(20);
set.add(10);
set.add(25);
set.add(40);
set.add(25);

//Print
console.log(`1. Add: `);
console.log(set);

//2. Has elements
console.log(`\n2. Has: `);
console.log(`Set has 10: ${set.has(10)}`);
console.log(`Set has 40: ${set.has(40)}`);
console.log(`Set has 50: ${set.has(50)}`);

//3. Size
console.log(`\n3. Size: ${set.size}`);

//4. Remove
console.log(`\n4. Remove: `);
console.log(`Before: `);
console.log(set);
set.delete(15);
set.delete(25);
console.log(`After: `);
console.log(set);

//5. Clear
console.log(`\n5. Clear: `);
set.clear();
console.log(set);