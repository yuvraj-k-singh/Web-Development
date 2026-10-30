let user = {
    name: "Yuvraj",
    age: 21,
    city: "Indore"
};

console.log(user);

//Object.keys
console.log(`\n1.User keys: `);
console.log(Object.keys(user));

//Object.values
console.log(`\n2.User values: `);
console.log(Object.values(user));

//Object.entries
console.log(`\n3.User entries: `);
console.log(Object.entries(user));

//Object.seal -> Prevent Objects from Insertion or Deletion but Updation is allowed
Object.seal(user);
user.name = "Pari";
console.log(`\n4.User Seal: `);
console.log(user);

//Object.freeze -> Prevent objects from further CRUD operation
Object.freeze(user);
user.email = "Yuvraj@google.com";
console.log(`\n5.User Freeze: `);
console.log(user);