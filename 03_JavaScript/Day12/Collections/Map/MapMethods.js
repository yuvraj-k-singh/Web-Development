let map = new Map([]);

//1. add
map.set("name", "Yuvraj");
map.set("age", 21);
map.set([10,20], "arr");
map.set({name: "Mohit", age: 21}, "object");
console.log(`1. Add: `);
console.log(map);

//2. size
console.log(`\n2. Map size: ${map.size}`);

//3. has
console.log(`\n3. Has: `);
console.log(`Map has name key: ${map.has("name")}`);
console.log(`Map has age key: ${map.has("age")}`);
console.log(`Map has ENo key: ${map.has("Eno")}`);

//4. get
console.log(`\n4. Get: `);
console.log(`Map get(name): ${map.get("name")}`);
console.log(`Map get(age): ${map.get("age")}`);

//5. delete
console.log(`\n5. Delete: `);
console.log(`Before: `);
console.log(map);
map.delete("name");
console.log(`After: `);
console.log(map);

//6. clear
console.log(`\n6. Clear: `);
map.clear();
console.log(map);